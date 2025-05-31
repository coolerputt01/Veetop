<script setup lang="ts">
import { ref,type Ref,computed } from 'vue';

import wallet from '@/assets/wallet.svg';
import logout from '@/assets/logout.svg';
import truck from '@/assets/truck.svg';
 
const checkSize = computed(() => window.innerWidth > 850);

const isHovered : Ref<boolean> = ref(false);
</script>

<template>
    <main class="container-fluid">
       <section>
            <section class="main p-4" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;color: #000;overflow-x: hidden;overflow-y: scroll;height: 86vh;scroll-behavior: smooth;" :style="{marginLeft: checkSize ? '14vw' :'none',borderLeft: checkSize ? '1px solid lightgray': 'none' }">
                <div style="width: 100%;">
                    <h2 style="color: #000;text-align: left;font-weight:600;">My Profile</h2>
                    <p style="color: grey;text-align: left;">Manage your account information</p>
                </div>
                <section style="display: flex;justify-content: flex-start;align-items: center;width: 100%;gap: 5%;" :style="{ flexDirection : checkSize ? 'row' : 'column'}">
                    <section style="min-width: 60%;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                        <div class="card p-5 mt-3" style="width: 100%">
                            <div style="width: 100%;">
                                <h3 style="color: #000;text-align: left;font-weight:600;font-size: 1.5em;">Personal Information</h3>
                                <p style="color: grey;text-align: left;font-size: 0.8em;">Update your account details</p>
                            </div>
                            <div class="mt-3 gap-3">
                                <div style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width: 100%;">
                                    <label style="color: grey;text-align: left;font-size: 0.9em;font-weight: 600;width: 100%;">Full name</label>
                                    <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                                        <input type="text" class="mt-1" placeholder="Enter full name" style="width: 100%;border-radius: 10px;outline: none;border: 1px solid grey;padding: 5px;font-size: 0.9em;" maxlength="11">
                                    </div>
                                </div>
                                <div class="mt-3" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width: 100%;">
                                    <label style="color: grey;text-align: left;font-size: 0.9em;font-weight: 600;width: 100%;">Email Address</label>
                                    <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                                        <input type="text" class="mt-1" placeholder="Enter your email" style="width: 100%;border-radius: 10px;outline: none;border: 1px solid grey;padding: 5px;font-size: 0.9em;" maxlength="11">
                                    </div>
                                </div>
                                <div class="mt-3" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width: 100%;">
                                    <label style="color: grey;text-align: left;font-size: 0.9em;font-weight: 600;width: 100%;">Phone number</label>
                                    <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                                        <input type="text" class="mt-1" placeholder="Enter phone number" style="width: 100%;border-radius: 10px;outline: none;border: 1px solid grey;padding: 5px;font-size: 0.9em;" maxlength="11">
                                    </div>
                                </div>
                                <div class="mt-4" style="width: 100%">
                                    <button class="p-2" style="width: 20%;background-color: #000;border-radius: 10px;color: #fff;font-size: 0.8em;font-weight: 550;transition: all 0.3s;outline: none;border: none;text-align: center;" :style="{'width': checkSize ? '20%' :'50%'}">Edit Profile</button>
                                </div>
                            </div>
                        </div>


                        <div class="card p-5 mt-5" style="width: 100%">
                            <div style="width: 100%;">
                                <h3 style="color: #000;text-align: left;font-weight:600;font-size: 1.5em;">Security</h3>
                                <p style="color: grey;text-align: left;font-size: 0.8em;">Manage your account security</p>
                            </div>
                            <div class="mt-3 gap-3">
                                <div style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width: 100%;">
                                    <label style="color: grey;text-align: left;font-size: 0.9em;font-weight: 600;width: 100%;">Password</label>
                                    <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                                        <input type="text" class="mt-1" placeholder="Chnage your password" style="width: 100%;border-radius: 10px;outline: none;border: 1px solid grey;padding: 5px;font-size: 0.9em;" maxlength="11">
                                    </div>
                                     <div class="mt-3" style="width: 100%">
                                        <button class="p-2" style="width: 30%;background-color: #000;border-radius: 10px;color: #fff;font-size: 0.8em;font-weight: 550;transition: all 0.3s;outline: none;border: none;text-align: center;" :style="{'width': checkSize ? '30%' :'70%'}">Change Passsword</button>
                                    </div>
                                </div>
                                <div class="mt-5" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width: 100%;">
                                    <label style="color: grey;text-align: left;font-size: 0.9em;font-weight: 600;width: 100%;">Pin</label>
                                    <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                                        <input type="text" inputmode="numeric" class="mt-1" placeholder="Change your pin" style="width: 100%;border-radius: 10px;outline: none;border: 1px solid grey;padding: 5px;font-size: 0.9em;" maxlength="6">
                                    </div>
                                    <div class="mt-3" style="width: 100%">
                                        <button class="p-2" style="width: 20%;background-color: #000;border-radius: 10px;color: #fff;font-size: 0.8em;font-weight: 550;transition: all 0.3s;outline: none;border: none;text-align: center;" :style="{'width': checkSize ? '20%' :'50%'}">Change Pin</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="gap-5" style="display: flex;justify-content: flex-start;align-items: center;width: 100%;flex-direction: column;height: 100%;">
                        <div class="card p-2" style="width: 90%;">
                            <div class="card-body">
                                <h1 class="card-title" style="text-align: left;font-size: 1.5em;font-weight:700;">Account Balance</h1>
                                <span style="text-align: left;font-size: 2.4em;font-weight: 700;color: #000;">
                                    ₦500
                                </span>
                                <div style="width: 100%;">
                                    <button class="p-1 mt-3" style="width: 80%;background-color: #000;border-radius: 10px;color: #fff;font-size: 0.8em;font-weight: 550;transition: all 0.3s;outline: none;border: none;text-align: center;"> <img :src="wallet" alt="VeeTop wallet icon" style="width: 1.2em;height: 1.2em;margin: 3%;"> Add Money</button>
                                </div>
                            </div>
                        </div>
                        <div class="card p-2" style="width: 90%;">
                            <div class="card-body" style="display: flex;justify-content: center;align-items: center;">
                                 <button @mouseover="isHovered = true" @mouseleave="isHovered = false" class="p-1 mt-3 black-btn" style="color: #000 ;width: 90%;background-color: #fff;border: 0.5px solid grey;border-radius: 10px;font-size: 0.9em;font-weight: 550;transition: all 0.3s;outline: none;text-align: center;"> <img class="truck" :src="isHovered ? truck : logout" alt="VeeTop wallet icon" style="width: 1.2em;height: 1.2em;margin: 3%;transition: all 0.3s;"> Log out</button>
                            </div>
                        </div>
                        <div class="card p-2" style="width: 90%;">
                            <div class="card-body">
                                <h4 class="card-title" style="font-size: 1.5em;font-weight: 650;margin: 0;padding: 0;">
                                    Need Help?
                                </h4>
                                <div class="card-text" style="line-height: 15px;margin-top: 0.1em;">
                                    <p style="color: grey;font-size: 0.7em;">Contact our customer support team for assistance with your account.</p>
                                </div>
                                <div style="display: flex;justify-content: center;align-items: center;flex-direction: column;">
                                    <div style="width: 100%;display: flex;justify-content: center;align-items: center;margin-bottom: 5%">
                                        <button class="p-2 mt-3" style="width: 80%;background-color: #000;border-radius: 10px;color: #fff;font-size: 0.8em;font-weight: 550;transition: all 0.3s;outline: none;border: none;text-align: center;"> Contact Support</button>
                                    </div>
                                    <span style="text-align: center;color: grey;font-size: 0.8em;">Email: support@veetop.com</span>
                                    <span style="text-align: center;color: grey;font-size: 0.8em;">Phone: 0800-234-5678</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
       </section>
    </main>
</template>
<style>
* {
    color: #000;
}

button:hover {
    opacity: 0.8;
}
.black-btn:hover {
    background-color: #000 !important;
    overflow-x: hidden;
    color: grey !important;
    text-align: center;
    .truck {
        width: 1.6em !important;
        height: 1.6em !important;
        margin: 0;
        animation: move 1s ease-in-out forwards;
    }
}
@keyframes move {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(750%);
    }
}
.main::-webkit-scrollbar {
    height: 3px;
    width: 8px;
}

.main::-webkit-scrollbar-track {
    background: transparent; /* Light gray track */
    border-radius: 8px;
}

.main::-webkit-scrollbar-thumb {
    background-color: #000; /* Customize to match your theme */
    border-radius: 8px;
    cursor: pointer;
}
</style>