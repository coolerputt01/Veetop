<script setup lang="ts">
import { ref ,onUnmounted,computed } from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';

import { auth } from '@/scripts/firebase.ts';
import { signInWithEmailAndPassword  } from 'firebase/auth';

const email : Ref<string> = ref('');
const password : Ref<string> = ref('');

const router = useRouter();
function redirect() {
    router.push('/signup')
}

const passw : Ref<HTMLElement | null> = ref(null);
const isClicked : Ref<boolean> = ref(false);

const isFocused : Ref<boolean> = ref(false);
const timestamp = ref(Date.now());
const base_time = ref(0);

const show_seconds_display = computed(() => {
  if (base_time.value === 0) return 0;
  return Math.floor((timestamp.value - base_time.value) / 1000);
});

let timer: number | null = null;

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
async function login(email:string,password:string) {
  try {
    isLoading.value = true;
    encounteredError.value = false;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Signed in user:', user.email);
    showToastFunc("User Logn In succesful.")
    startTimer();
    router.push('/dashboard');
  } catch (error: unknown) {
    encounteredError.value = true;
    if (error instanceof Error) {
      showToastFunc(error.message);
      startTimer();
      console.error('Sign-in error:', error.message);
    } else {
      showToastFunc('Unknown error occurred during sign-in.');
      startTimer();
    }
  } finally {
    isLoading.value = false;
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
                <h1 style="font-weight: 550;">Login</h1>
                <input placeholder="Enter your email" @focusin="isFocused = true" @focusout="isFocused = false" :class="{'focus':isFocused}" type="text" class="p-3" v-model="email" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <div class="input-group" style="position: relative;">
                  <input ref="passw" placeholder="Enter your password" :type="isClicked ? 'text' : 'password'" class="p-3" v-model="password" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                  <img v-lazy="'/src/assets/eye.svg'" alt="Veetop eye Login icon" style="width: 1.3em;position: absolute;right:35%;top:20%;cursor: pointer;opacity: 0.7;" @click="isClicked = !isClicked;" >
                </div>
                <p class="text-dark">Don't have an account? <a href="#" @click.prevent="redirect">signup here</a></p>
                <button @click.prevent="login(email,password)" class="p-2 justify-content-center" style="color:#fff;cursor: pointer;font-size:1.05em;background-color: #000;border-radius: 50px;width: 50% ;text-align: center;">
                    <span v-if="!isLoading"> Login </span>
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