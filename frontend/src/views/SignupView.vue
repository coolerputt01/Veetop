<script setup lang="ts">
import { ref, computed,onUnmounted, toDisplayString } from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';

import { auth, firestore } from '@/scripts/firebase.ts';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc , setDoc } from 'firebase/firestore';

const email : Ref<string> = ref('');
const password : Ref<string> = ref('');
const confirm_password : Ref<string> = ref('');
const phone_number : Ref<string> = ref('');

const isFocused : Ref<boolean> = ref(false);
const timestamp = ref(Date.now());
const base_time = ref(0);

const show_seconds_display = computed(() => {
  if (base_time.value === 0) return 0;
  return Math.floor((timestamp.value - base_time.value) / 1000);
});

let timer: number | null = null;

function redirect() {
    router.push('/login')
}

function startTimer() {
  base_time.value = Date.now();
  if (timer !== null) clearInterval(timer);
  timer = window.setInterval(() => {
    timestamp.value = Date.now();
  }, 1000);
}

onUnmounted(() => {
  if (timer !== null) clearInterval(timer);
});

const showToast : Ref<boolean> = ref(false);
const toastText : Ref<HTMLElement | null> = ref(null);
const isLoading : Ref<boolean> = ref(false); 
const encounteredError : Ref<boolean> = ref(false);

const router = useRouter();

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
    if (timer !== null) {
        clearInterval(timer);
    }
});

async function signUp(email: string, password:string,confirm_password:string,phone_number:string) {
    try{
        isLoading.value = true;
        if(password !== confirm_password) {
            encounteredError.value = true;
            showToastFunc("Passwords are not equal");
            isLoading.value = false;
            startTimer();
            return;
        }else if( password.length < 6) {
            encounteredError.value = false;
            showToastFunc("Password should have more than 6 characters")
            encounteredError.value = true;
            startTimer();
            return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;

        await setDoc(doc(firestore,"users",user.uid),{
            email: user.email,
            phone_number: phone_number,
            created_at: new Date().toISOString()
        });
        startTimer();
        encounteredError.value = false;
        showToastFunc("User Successfully Signed Up.")
        //router.push('/verify')
    }catch(error: unknown){
        if(error instanceof Error){
            console.log("An Error Occured: ",error.message);
            encounteredError.value = true;
            showToastFunc(error.message);
            isLoading.value = false;
            startTimer();
        }else {
            console.log(" Un-recorded error: ",error);
            encounteredError.value = true;
            showToastFunc("An Error Ocurred.");
            isLoading.value = false;
            startTimer();
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
        <section style="display:flex;width:100vw;height: 100vh;align-items: center;padding:0;margin:0;flex-direction: column;">
            <form style="width:100vw;height:50vh;display: flex;justify-content: center;flex-direction: column;margin-top: 10em;">
                <h1 style="font-weight: 550;">Sign Up</h1>
                <input placeholder="Enter your email" @focusin="isFocused = true" @focusout="isFocused = false" :class="{'focus':isFocused}" type="text" class="p-3" v-model="email" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <input placeholder="Enter your phone number" type="text" class="p-3" v-model="phone_number" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <input placeholder="Enter your password" type="password" class="p-3" v-model="password" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <input placeholder="Confirm password" type="password" class="p-3" v-model="confirm_password" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <p class="text-dark">Already have an account? <a href="#" @click.prevent="redirect">login here</a></p>
                <button @click.prevent="signUp(email,password,confirm_password,phone_number)" class="p-2 justify-content-center"style="color:#fff;cursor: pointer;font-size:1.05em;transition:all 0.3s;background-color: #000;border-radius: 50px;width: 50% ;text-align: center;">
                    <span v-if="!isLoading">Sign Up</span>
                    <div v-else class="spinner-border text-light" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </form>
            <p class="text" style="margin-top: 10em;color: grey;">Veetop is very sensitive with your information.&#128064;</p>
        </section>
    </main>
</template>
<style scoped>
.focus {
    outline: none;
}
form > * {
    margin: 0.4em;
}
button:hover {
    opacity: 0.8;
}
@media (min-width:768px) {
    .text {
        margin-top: 5em !important;
    }
}
</style>