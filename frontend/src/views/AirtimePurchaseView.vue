<script setup lang="js">
import mtn from '@/assets/mtn.png';
import airtel from '@/assets/airtel.png';
import glo from '@/assets/glod.png';
import mobile from '@/assets/mobile.png';


import { computed } from 'vue';
const checkSize = computed(() => window.innerWidth > 850)

</script>

<template>
    <main class="container-fluid">
        <section>
            <section class="main p-4" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;color: #000;overflow-x: hidden;overflow-y: scroll;height: 86vh;scroll-behavior: smooth;" :style="{marginLeft: checkSize ? '14vw' :'none',borderLeft: checkSize ? '1px solid lightgray': 'none' }">
                <div style="width: 100%;">
                    <h2 style="color: #000;text-align: left;font-weight:600;">Buy Airtime</h2>
                    <p style="color: grey;text-align: left;">Purchase airtime for any mobile number</p>
                </div>
                <section style="display: flex;justify-content: flex-start;align-items: center;width: 100%;gap: 5%;" :style="{ flexDirection : checkSize ? 'row' : 'column'}">
                    <div class="card p-5 mt-3" style="min-width: 60%">
                        <div style="width: 100%;">
                            <h3 style="color: #000;text-align: left;font-weight:600;font-size: 1.5em;">Airtime Purchase</h3>
                            <p style="color: grey;text-align: left;font-size: 0.8em;">Select network, enter number and amount</p>
                        </div>
                        <div>
                            <p class="mt-5" style="color: grey;text-align: left;font-size: 0.8em;font-weight: 600;">Select Network</p>
                            <div class="p-1" style="display: flex;justify-content: flex-start;gap: 10%;align-items: center;width: 100%;flex-direction: row;">
                                <span style="cursor: pointer;">
                                    <img :src="mtn" alt="VeeTop MTN Icon" style="width: 3em;height: 3em;border-radius: 50%;">
                                    <p class="p-1" style="color: black;text-align: left;font-size: 0.8em;text-align: center;font-weight: 600;width: 3.5em">MTN</p>
                                </span>
                                
                                <span style="cursor: pointer;">
                                    <img :src="airtel" alt="VeeTop Airtel Icon" style="width: 3em;height: 3em;border-radius: 50%;">
                                    <p class="p-1" style="color: black;text-align: left;font-size: 0.8em;text-align: center;font-weight: 600;width: 3.5em">Airtel</p>
                                </span>
                                    <span style="cursor: pointer;">
                                    <img :src="glo" alt="VeeTop Glo Icon" style="width: 3em;height: 3em;border-radius: 50%;">
                                    <p class="p-1" style="color: black;text-align: left;font-size: 0.8em;text-align: center;font-weight: 600;width: 3.5em">Glo</p>
                                </span>
                                
                                <span style="cursor: pointer;">
                                    <img :src="mobile" alt="VeeTop 9Mobile Icon" style="width: 3em;height: 3em;border-radius: 50%;">
                                    <p style="color: black;text-align: left;font-size: 0.8em;text-align: center;font-weight: 600;width: 3.7em">9mobile</p>
                                </span>
                            </div>
                        </div>
                        <div style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width: 100%;">
                            <label style="color: grey;text-align: left;font-size: 0.9em;font-weight: 600;width: 100%;">Phone Number</label>
                            <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                                <input type="text" class="mt-2" placeholder="Enter phone number" style="width: 80%;border-radius: 10px;outline: none;border: 1px solid grey;padding: 5px;font-size: 0.9em;" maxlength="11">
                            </div>
                        </div>
                        <div class="mt-3" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width: 100%;">
                            <label style="color: grey;text-align: left;font-size: 0.9em;font-weight: 600;width: 100%;">Select amount</label>
                            <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                                <input type="number" class="mt-2" placeholder="Enter custom amount" style="width: 80%;border-radius: 10px;outline: none;border: 1px solid grey;padding: 5px;font-size: 0.9em;" maxlength="11">
                            </div>
                        </div>
                        <div class="mt-4" style="width: 80%">
                            <button class="p-2" style="width: 100%;background-color: #000;border-radius: 10px;color: #fff;font-size: 0.8em;font-weight: 550;transition: all 0.3s;outline: none;border: none;text-align: center;">Buy Airtime</button>
                        </div>
                    </div>
                    <section class="gap-5" style="display: flex;justify-content: flex-start;align-items: center;width: 100%;flex-direction: column;height: 100%;">
                        <div class="card p-2" style="width: 85%;">
                            <div class="card-body">
                                <h1 class="card-title" style="text-align: left;font-size: 1.8em;font-weight: 600;">Your Balance</h1>
                                <span style="text-align: left;font-size: 2.4em;font-weight: 700;color: #000;">
                                    ₦500
                                </span>
                                <p class="card-text" style="color: grey;text-align: left;font-size: 0.9em;font-weight: 500;width: 100%;">
                                    Available for transactions
                                </p>
                            </div>
                        </div>
                        <div class="card p-2" style="width: 85%;">
                            <div class="card-body">
                                <h1 class="card-title" style="text-align: left;font-size: 1.8em;font-weight: 600;">How it works</h1>
                                    <div class="gap-3" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;">
                                        <span style="width: 95%"><span style="color: #fff;background-color: #000;width: 2em;height: 2em ;border-radius: 50%;padding: 8px;object-fit: cover;font-size: 0.5em;margin-right: 2%;">1</span><span style="color: #000;font-size: 0.8em;">Select your preferred network provider</span></span>
                                        <span style="width: 95%"><span style="color: #fff;background-color: #000;width: 2em;height: 2em ;border-radius: 50%;padding: 8px;object-fit: cover;font-size: 0.5em;margin-right: 2%;">2</span><span style="color: #000;font-size: 0.8em;">Enter recipient's phone number</span></span>
                                        <span style="width: 95%"><span style="color: #fff;background-color: #000;width: 2em;height: 2em ;border-radius: 50%;padding: 8px;object-fit: cover;font-size: 0.5em;margin-right: 2%;">3</span><span style="color: #000;font-size: 0.8em;">Select or enter desired amount</span></span>
                                        <span style="width: 95%"><span style="color: #fff;background-color: #000;width: 2em;height: 2em ;border-radius: 50%;padding: 8px;object-fit: cover;font-size: 0.5em;margin-right: 2%;">4</span><span style="color: #000;font-size: 0.8em;text-align: left;">Click "<b style="color: #000;">Buy Airtime"</b> to complete your purchase</span></span>
                                    </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    </main>
</template>
<style scoped>
input {
    color: #000;
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
summary {
    cursor: pointer !important;
}
summary::marker {
  content: none;
}
ul > * {
    list-style: none;
    margin: 3%;
}
.select > * {
    margin: 3%;
}
.select:hover {
    background-color: grey;
    border: 0.5px solid #fff;
}
button:hover {
    opacity: 0.7;
}
.number:focus {
    outline: none;
    border: none;
}
</style>