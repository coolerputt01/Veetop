<script lang="ts" setup>
import { ref,onUnmounted ,computed,onBeforeMount } from 'vue';
import type { Ref } from 'vue';
import { sendEmailVerification,onAuthStateChanged ,getAuth } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { auth } from '@/scripts/firebase.ts';

const user = auth.currentUser;

const showToast : Ref<boolean> = ref(false);
const encounteredError : Ref<boolean> = ref(false);

const timestamp = ref(Date.now());
const base_time = ref(0);
const toastText : Ref<HTMLElement | null>= ref(null);
const show_seconds_display = computed(() => {
    if(base_time.value === 0) return 0;
    return Math.floor((timestamp.value - base_time.value) / 1000);
});

const router = useRouter();

let timer: number | null = null;

onBeforeMount(() => {
    onAuthStateChanged((auth) , async (user) => {
        if(user) {
            await user.reload();
            if(user.emailVerified) {
                router.push('/dashboard');
            }else {
                encounteredError.value = true;
                startTimer();
                showToastFunc("Please verify your e-mail");
            }
        }
    });
});

function startTimer() {
    base_time.value = Date.now();
    if (timer !== null) clearInterval(timer);
    timer = window.setInterval(() => {
        timestamp.value = Date.now();
    }, 1000);
}
const toastColor = computed(() =>
  encounteredError.value === false
    ? "rgba(74, 247, 83, 0.25)"
    : "rgba(255, 15, 55, 0.25)"
);
function showToastFunc(text:string) {
    if( toastText.value === null){
        return
    }
    showToast.value = true;
    toastText.value.innerText = text;
}
onUnmounted(() => {
    if (timer !== null) clearInterval(timer);
});
async function resendMail(user: any) {
    try{
        await sendEmailVerification(user);
        showToastFunc("Email Sent.");
        startTimer();
    }catch(error: unknown) {
        if(error instanceof Error){
            console.log("An Error Occured: ",error.message);
            encounteredError.value = true;
            showToastFunc("An Error Occured.");
        }else {
            console.log("Another Occured: ",error);
            encounteredError.value = true;
            showToastFunc("An Error Occured.");
        }
    }
}
</script>
<template>
    <main class="container-fluid" style="overflow: hidden;">
         <div class="card ms-auto" v-show="showToast" style="width: 18rem;border: none;justify-content:flex-end;">
            <div class="card-head" style="display: flex;justify-content: space-around;align-items: center;">
                <div style="width:1.2em;height: 1.2em;border-radius: 50%;background-color: #000;margin:0.5em;"></div>
                <strong class="me-auto">VeeTop</strong>
                <small> {{ Math.floor(show_seconds_display) }}s</small>
                <button type="button" class="btn-close"  @click="showToast = false"></button>
            </div>
            <div ref="toastText" class="card-body" :style="{'backgroundColor':toastColor}" style="border: 1px grey solid;border-radius: 5px !important;">
                
            </div>
        </div>
        <section style="display: flex;justify-content: center;align-items: center;width:100vw;height:100vh;">
            <div class="card" style="width: 20rem;border: none !important;">
                <img class="card-img-top" v-lazy="'https://i.ibb.co/rG8QBv5p/Veetop-verified-email.jpg'" alt="Veetop Verify Image">
                <div class="card-body">
                    <p class="card-text" style="font-weight: 600;font-size: 0.8em;text-align: center;">
                       Check your inbox! We've sent a link to verify your email address.
                    </p>
                    <button class="p-2 m-5 justify-content-center" style="color:#fff;cursor: pointer;font-size:0.7em;background-color: #000;border-radius: 50px;width: auto ;text-align: center;outline:none;border:none;" @click.prevent="resendMail(user)"> Didn't receive the email? Resend it </button>
                </div>
            </div>
        </section>
    </main>
</template>