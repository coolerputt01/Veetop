<script setup lang="ts">
import { ref, computed,onUnmounted } from 'vue';
import type { Ref } from 'vue';

import { auth, firestore } from '@/scripts/firebase.ts';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc , setDoc } from 'firebase/firestore';

const email : Ref<string> = ref('');
const password : Ref<string> = ref('');
const confirm_password : Ref<string> = ref('');
const phone_number : Ref<string> = ref('');

const isFocused : Ref<boolean> = ref(false);
const timestamp = ref(Date.now());
const show_seconds: Ref<number> = ref(0);
let timer: number | null = null;

const showToast : Ref<boolean> = ref(false);

async function signUp(email: string, password:string,confirm_password:string,phone_number:string) {
    try{
        if(password !== confirm_password) {
            console.log("nope");
            return;
        }else if( password.length < 6) {
            console.log("nah");
            return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;

        await setDoc(doc(firestore,"users",user.uid),{
            email: user.email,
            phone_number: phone_number,
            created_at: new Date().toISOString()
        })
        const base_time = Date.now();
        timer = setInterval(() => {
            timestamp.value = Date.now();
            show_seconds.value = (timestamp.value - base_time) / 1000;
        }, 1000);
        showToast.value = !showToast.value;
        console.log(showToast)
        onUnmounted(() => {
            if (timer !== null) {
                clearInterval(timer);
            }
        });
    }catch(error: unknown){
        if(error instanceof Error){
            console.log("An Error Occured: ",error.message);
        }else {
            console.log(" Un-recorded error: ",error);
        }
    }
}
</script>
<template>
    <main class="container-fluid" style="overflow: hidden;">
        <div class="card ms-auto" v-show="!showToast" style="width: 18rem;border: none;justify-content:flex-end;">
            <div class="card-head" style="display: flex;justify-content: space-around;align-items: center;">
                <div style="width:1.2em;height: 1.2em;border-radius: 50%;background-color: #000;margin:0.2em;"></div>
                <strong class="me-auto">VeeTop</strong>
                <small> {{ Math.floor(show_seconds) }}s</small>
                <button type="button" class="btn-close"  @click="showToast = false"></button>
            </div>
            <div class="card-body" style="background-color: rgba(74, 247, 83, 0.25);border: 1px #4af753 solid;border-radius: 5px !important;">
                User Succesfully Logged in.
            </div>
        </div>
        <section style="display:flex;width:100vw;height: 100vh;align-items: center;padding:0;margin:0;flex-direction: column;">
            <form style="width:100vw;height:50vh;display: flex;justify-content: center;flex-direction: column;margin-top: 10em;">
                <h1 style="font-weight: 550;">Sign Up</h1>
                <input placeholder="Enter your email" @focusin="isFocused = true" @focusout="isFocused = false" :class="{'focus':isFocused}" type="text" class="p-3" v-model="email" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <input placeholder="Enter your phone number" type="number" class="p-3" v-model="phone_number" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <input placeholder="Enter your password" type="password" class="p-3" v-model="password" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <input placeholder="Confirm password" type="password" class="p-3" v-model="confirm_password" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <p class="text-dark">Already have an account? <a href="#">login here</a></p>
                <button @click.prevent="signUp(email,password,confirm_password,phone_number)" class="p-2 justify-content-center"style="color:#fff;cursor: pointer;font-size:1.05em;background-color: #000;border-radius: 50px;width: 50% ;text-align: center;">Sign Up</button>
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