<script setup lang="ts">
import { ref ,onUnmounted,computed } from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';

import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import { doc , setDoc } from 'firebase/firestore';
import { auth , firestore} from '@/scripts/firebase.ts';
import { createUserWithEmailAndPassword , sendEmailVerification} from 'firebase/auth';

const $toast = useToast();

const fullname = ref('');
const email : Ref<string> = ref('');
const password : Ref<string> = ref('');
const phone_number : Ref<string> = ref('');
const terms = ref(false);

const router = useRouter();

const isLoading : Ref<boolean> = ref(false); 

function showToastFunc(text:string,error:boolean) {
  if(!error){
    let instance = $toast.success(text, {
      position: 'top-right'
    });
  }else {
    let instance = $toast.error(text, {
        position: 'top-right'
      });
  }
}
async function signup(email:string,password:string) {
    if(!terms || password.length < 6){
        if(!terms) {
            showToastFunc("Please accept the terms of service",true);
        }else if(password.length < 6) {
            showToastFunc("Password must be at least 7 characters long",true);
        }
        return;
    }
  try {
    isLoading.value = true;
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    const user = userCredential.user;
    await sendEmailVerification(user);
    await setDoc(doc(firestore,"users",user.uid),{
        email: user.email,
        phone_number: phone_number.value,
        fullname: fullname.value,
        created_at: new Date().toISOString()
    });
    console.log('Signed up user:', user.email);
    showToastFunc("Sign up succesful.",false);

    router.push('/dashboard');
  } catch (error: unknown) {
    if (error instanceof Error) {
      showToastFunc(error.message,true);

      console.error('Sign up error:', error.message);
    } else {
      showToastFunc('Unknown error occurred during sign-up.',true);

    }
  } finally {
    isLoading.value = false;
  }
}

</script>
<template>
    <main class="container-fluid" style="overflow: hidden;display: flex;justify-content: center;align-items: center;">
        <section class="white" style="width:50vw;height: 100vh;background-color: #fff;padding-top:32px;display: flex;justify-content: center;align-items: center;flex-direction: column;">
          <span style="display: flex;justify-content: center;align-items: center;flex-direction: column;">
              <h1 class="h1 display-1" style="font-weight: 600;color:grey;font-size: 2.4em;"><span style="color: #000">Vee</span>Top</h1>
              <h2 style="font-size: 1.8em;font-weight: 700;">Create your account</h2>
              <p style="color: grey">Join VeeTop to buy and transfer airtime and data</p>
            </span>
            <form style="margin-top: 3%;">
                <span class="span" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width:50vw;">
                  <label style="text-align: left; margin: 2%;font-size: 0.9em;width: 66%">Full name</label>
                  <input v-model="fullname" placeholder="Enter your full name" type="text" class="p-3" style="border-radius: 8px;border: 0.5px grey solid;font-size: 1em;width:70%;height:2vh;outline:none;">
                </span>
                <span class="span" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width:50vw;">
                  <label style="text-align: left; margin: 2%;font-size: 0.9em;width: 66%">Email Address</label>
                  <input v-model="email" placeholder="Enter your email" type="email" class="p-3" style="border-radius: 8px;border: 0.5px grey solid;font-size: 1em;width:70%;height:2vh;outline:none;">
                </span>
                <span class="span" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width:50vw;">
                  <label style="text-align: left; margin: 2%;font-size: 0.9em;width: 66%">Phone number</label>
                  <input v-model="phone_number" placeholder="Enter your phone number" type="text" maxlength="11" class="p-3" style="border-radius: 8px;border: 0.5px grey solid;font-size: 1em;width:70%;height:2vh;outline:none;">
                </span>
                <span class="span" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width:50vw;">
                  <label style="text-align: left; margin: 2%;font-size: 0.9em;width: 66%">Password</label>
                  <input v-model="password" placeholder="Enter your password" type="password" class="p-3" style="border-radius: 8px;border: 0.5px grey solid;font-size: 1em;width:70%;height:2vh;outline:none;">
                </span>
                <span class="span" style="display: flex;justify-content: flex-start;align-items: center;width: 50vw;margin: 3%;">
                  <div class="rmme" style="display: flex;justify-content: center;align-items: center;gap: 4%;width: 100%;">
                    <input type="checkbox" value="Remember me" v-model="terms"><span style="font-size: 0.9em;display: flex;justify-content: center;align-items: center;">I agree to the Terms of Service and Privacy Policy</span>
                  </div>
                </span>
                <div style="display: flex;justify-content: center;align-items: center;width: 100%;">
                  <button @click.prevent="signup(email,password)" class="p-2 hover" style="background-color: #000;color: #fff;border-radius: 50px;width: 70%;border: none;outline: none;transition: all 0.5s;">
                    <span v-if="!isLoading">Create account</span>
                    <div v-else class="spinner-border text-light" role="status">
                        <span class="visually-hidden">processing...</span>
                    </div>
                </button>
                </div>
            </form>
            <span style="width:100%">
              <p style="color: grey;font-size: 0.9em;text-align: center;margin: 2%;">Already have an account?<a href="#" @click="router.push('/login')"> Sign in</a></p>
            </span>
            <span class="span span-text" style="width: 50vw;position: relative;height: 20vh;">
              <p class="text" style="position:absolute;bottom: 0;left:25%;color:grey;font-size: 0.9em;">Veetop is very sensitive with your information.&#128064;</p>
            </span>
        </section>
        <section class="grid" style="width:50vw;height: 100vh;background-color: #000;">
            <span>
              <section style="color: #fff;font-weight: 1000;font-size: 1.2em;display: flex;justify-content: center;align-items: center;height: 100%;flex-direction: column;">
                <h1 style="font-weight: 600;font-size: 1.8em;width: 60%;text-align: center;">
                    Join VeeTop Today
                </h1>
                <p style="font-size: 0.9em;color: lightgray;font-weight: 400;margin: 5%;width: 35vw;text-align: center;">Create an account to enjoy seamless airtime and data purchases, and easy transfers to friends and family.</p>
                <div class="cards" style="display: flex;justify-content: center;align-items: center;gap: 5%;flex-direction: column;">
                    <div style="display: flex;justify-content: center;align-items: center;gap: 10%;">
                        <div class="p-3" style="background-color: #242424;border-radius: 14px;flex: 0 0 auto">
                            <span>
                            <h3 style="font-size:1.2em;font-weight: 650;text-align: center;">Special Offers</h3>
                            <p style="font-size:0.9em;font-weight: 400;">Exclusive deals for members</p>
                            </span>
                        </div>

                        <div class="p-3" style="background-color: #242424;border-radius: 14px;flex: 0 0 auto;transform: translateY(18%)">
                            <span>
                            <h3 style="font-size:1.2em;font-weight: 650;text-align: center;">Save Time</h3>
                            <p style="font-size:0.9em;font-weight: 400;">Quick recharge process</p>
                            </span>
                        </div>
                    </div>

                  <div style="display: flex;justify-content: center;align-items: center;gap: 10%">
                        <div class="p-3" style="background-color: #242424;border-radius: 14px;flex: 0 0 auto">
                            <span>
                            <h3 style="font-size:1.2em;font-weight: 650;text-align: center;">Low Fees</h3>
                            <p style="font-size:0.9em;font-weight: 400;">Competitive transaction fees</p>
                            </span>
                        </div>

                        <div class="p-3" style="background-color: #242424;border-radius: 14px;flex: 0 0 auto;transform: translateY(18%)">
                            <span>
                            <h3 style="font-size:1.2em;font-weight: 650;text-align: center;">24/7 Support</h3>
                            <p style="font-size:0.9em;font-weight: 400;">Always here to help</p>
                            </span>
                        </div>
                    </div>
                </div>

              </section>
            </span>
        </section>
    </main>
</template>
<style scoped>
.grid {
  position: relative;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 64px 64px;
  background-color: #000;
  overflow: hidden;
}

.grid::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  background:
    radial-gradient(circle at top left, rgba(0,0,0,1), transparent 50%),
    radial-gradient(circle at top right, rgba(0,0,0,1), transparent 50%),
    radial-gradient(circle at bottom left, rgba(0,0,0,1), transparent 50%),
    radial-gradient(circle at bottom right, rgba(0,0,0,1), transparent 50%);
}

.hover:hover {
  opacity: 0.8;
}

.cards > * {
    margin: 5%;
}


@media (max-width:853px) {
  .grid {
    display: none;
  }
  .white {
    width: 100vw !important;
  }
  input {
    width: 70vw !important;
  }
  button {
    width: 50vw !important;
  }
  .span {
    width: 100vw !important;
  }
  .rmme {
    width: 100vw !important;
    justify-content: flex-start !important;
  }
  .rmme > span {
    width: 50vw !important;
  }
  .span-text {
    left: 0 !important;
    margin-top: 5em;
    height: 42vh !important;
  }
}
</style>
