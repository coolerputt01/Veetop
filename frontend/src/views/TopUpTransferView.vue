<script setup lang="ts">
import { ref,type Ref, computed } from 'vue';

import mtn from '@/assets/mtn.png';
import airtel from '@/assets/airtel.png';
import glo from '@/assets/glod.png';
import mobile from '@/assets/mobile.png';

import data from '@/assets/dataw.svg';
import airtime from '@/assets/airtimew.svg';

import transfer from '@/assets/transfer.svg';

import dataFilled from '@/assets/data.svg';
import airtimeFilled from '@/assets/airtime.svg';

const dataImgPath : Ref<string> = ref(dataFilled);
const airtimeImgPath : Ref<string> = ref(airtimeFilled);

// Track selected network
const selectedNetwork : Ref<string> = ref('mtn');

// Track transfer type: 'airtime' | 'data' | null
const transferType : Ref<string> = ref('airtime');

const checkSize = computed(() => window.innerWidth > 850);

// Derived display text
const transferHeading = computed(() => {
  if (transferType.value === 'airtime') return 'Transfer Airtime';
  if (transferType.value === 'data') return 'Transfer Data';
  return 'Transfer';
});

const transferSubtext = computed(() => {
  if (transferType.value === 'airtime') return 'Send airtime to any phone number';
  if (transferType.value === 'data') return 'Send data to any phone number';
  return 'Select an option to continue';
});

const transferButtonText = computed(() => {
    
  if (transferType.value === 'airtime') {
    dataImgPath.value = dataFilled;
    airtimeImgPath.value = airtime;
    return 'Transfer Airtime';
  }
  if (transferType.value === 'data'){
    airtimeImgPath.value = airtimeFilled;
    dataImgPath.value = data;
    return 'Transfer Data';
  }
  return 'Select Transfer Type';
});

</script>

<template>
    <main class="container-fluid">
        <section>
            <section class="main p-4" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;color: #000;overflow-x: hidden;overflow-y: scroll;height: 86vh;scroll-behavior: smooth;" :style="{marginLeft: checkSize ? '14vw' :'none',borderLeft: checkSize ? '1px solid lightgray': 'none' }">
                <div style="width: 100%;">
                    <h2 style="color: #000;text-align: left;font-weight:600;">Transfer</h2>
                    <p style="color: grey;text-align: left;">Transfer airtime or data to friends and family</p>
                </div>
                <section style="display: flex;justify-content: flex-start;align-items: center;width: 100%;gap: 5%;" :style="{ flexDirection : checkSize ? 'row' : 'column'}">
                    <div class="card p-5 mt-3" style="min-width: 60%">
                        <div style="width: 100%;line-height: 12px;">
                            <h3 style="color: #000;text-align: left;font-weight:600;font-size: 1.5em;">{{ transferHeading }}</h3>
                            <p style="color: grey;text-align: left;font-size: 0.8em;">{{ transferSubtext }}</p>
                        </div>
                        <div class="mt-3">
                            <span style="color: grey;text-align: left;font-size: 0.9em;font-weight: 600;width: 100%;">What would you like to transfer?</span>
                            <div style="display: flex;justify-content: center;align-items: center;width: 100%;">
                                <div class="mt-3" style="width: 50%;flex: 0 0 auto;">
                                    <button class="p-2" @click="transferType = 'airtime'" :style="{
                                    width: '90%',
                                    backgroundColor: transferType === 'airtime' ? '#000' : '#fff',
                                    color: transferType === 'airtime' ? '#fff' : '#000',
                                    border: '1px solid black',
                                    borderRadius: '10px',
                                    fontSize: '0.8em',
                                    fontWeight: '550',
                                    textAlign: 'center',
                                    transition: 'all 0.3s'
                                    }">
                                    <img :src="airtimeImgPath" alt="VeeTop Airtime icon" style="width: 1.2em;height: 1.2em;margin: 3%;transition: all 0.3s;">
                                    Airtime</button>
                                </div>
                                <div class="mt-3" style="width: 50%;flex: 0 0 auto;">
                                    <button class="p-2"  @click="transferType = 'data'" :style="{
                                        width: '90%',
                                        backgroundColor: transferType === 'data' ? '#000' : '#fff',
                                        color: transferType === 'data' ? '#fff' : '#000',
                                        border: '1px solid black',
                                        borderRadius: '10px',
                                        fontSize: '0.8em',
                                        fontWeight: '550',
                                        textAlign: 'center',
                                        transition: 'all 0.3s'
                                        }">
                                        <img :src="dataImgPath" alt="VeeTop Data icon" style="width: 1.2em;height: 1.2em;margin: 3%;transition: all 0.3s;"> Data</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="mt-5" style="color: grey;text-align: left;font-size: 0.8em;font-weight: 600;">Select Network</p>
                            <div class="p-1" style="display: flex;justify-content: flex-start;gap: 10%;align-items: center;width: 100%;flex-direction: row;">
                                <span style="cursor: pointer;transition: all 0.3s;" @click="selectedNetwork = 'mtn'" :style="{ border: selectedNetwork === 'mtn' ? '2px solid black' : 'none', borderRadius: '10px', padding: '5px' }">
                                    <img :src="mtn" alt="VeeTop MTN Icon" style="width: 3em;height: 3em;border-radius: 50%;">
                                    <p class="p-1" style="color: black;text-align: left;font-size: 0.8em;text-align: center;font-weight: 600;width: 3.5em">MTN</p>
                                </span>
                                
                                <span style="cursor: pointer;transition: all 0.3s;" @click="selectedNetwork = 'airtel'" :style="{ border: selectedNetwork === 'airtel' ? '2px solid black' : 'none', borderRadius: '10px', padding: '5px' }">
                                    <img :src="airtel" alt="VeeTop Airtel Icon" style="width: 3em;height: 3em;border-radius: 50%;">
                                    <p class="p-1" style="color: black;text-align: left;font-size: 0.8em;text-align: center;font-weight: 600;width: 3.5em">Airtel</p>
                                </span>
                                    <span style="cursor: pointer;" @click="selectedNetwork = 'glo'" :style="{ border: selectedNetwork === 'glo' ? '2px solid black' : 'none', borderRadius: '10px', padding: '5px' }">
                                    <img :src="glo" alt="VeeTop Glo Icon" style="width: 3em;height: 3em;border-radius: 50%;" >
                                    <p class="p-1" style="color: black;text-align: left;font-size: 0.8em;text-align: center;font-weight: 600;width: 3.5em">Glo</p>
                                </span>
                                
                                <span style="cursor: pointer;" @click="selectedNetwork = 'mobile'" :style="{ border: selectedNetwork === 'mobile' ? '2px solid black' : 'none', borderRadius: '10px', padding: '5px' }">
                                    <img :src="mobile" alt="VeeTop 9Mobile Icon" style="width: 3em;height: 3em;border-radius: 50%;">
                                    <p style="color: black;text-align: left;font-size: 0.8em;text-align: center;font-weight: 600;width: 3.7em">9mobile</p>
                                </span>
                            </div>
                        </div>
                        <div class="mt-4" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width: 100%;">
                            <label style="color: grey;text-align: left;font-size: 0.9em;font-weight: 600;width: 100%;">Phone Number</label>
                            <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                                <input type="text" class="mt-2" placeholder="Enter phone number" style="width: 100%;border-radius: 10px;outline: none;border: 1px solid grey;padding: 5px;font-size: 0.9em;" maxlength="11">
                            </div>
                        </div>
                        <div class="mt-3" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;width: 100%;">
                            <label style="color: grey;text-align: left;font-size: 0.9em;font-weight: 600;width: 100%;">Amount to Transfer</label>
                            <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                                <input type="text" class="mt-2" placeholder="Enter your amount" style="width: 100%;border-radius: 10px;outline: none;border: 1px solid grey;padding: 5px;font-size: 0.9em;" maxlength="11">
                            </div>
                        </div>
                        <div class="mt-4" style="width: 100%">
                            <button class="p-2" style="width: 100%;background-color: #000;border-radius: 10px;color: #fff;font-size: 0.8em;font-weight: 550;transition: all 0.3s;outline: none;border: none;text-align: center;">{{ transferButtonText }}</button>
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
                                    <div class="gap-3 mt-4" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;">
                                        <span style="width: 95%"><span style="color: #fff;background-color: #000;width: 2em;height: 2em ;border-radius: 50%;padding: 8px;object-fit: cover;font-size: 0.5em;margin-right: 5%;">1</span><span style="color: #000;font-size: 0.8em;font-weight: 450;">Choose between airtime or data transfer</span></span>
                                        <span style="width: 95%"><span style="color: #fff;background-color: #000;width: 2em;height: 2em ;border-radius: 50%;padding: 8px;object-fit: cover;font-size: 0.5em;margin-right: 5%;">2</span><span style="color: #000;font-size: 0.8em;font-weight: 450;">Select recipient's network provider</span></span>
                                        <span style="width: 95%"><span style="color: #fff;background-color: #000;width: 2em;height: 2em ;border-radius: 50%;padding: 8px;object-fit: cover;font-size: 0.5em;margin-right: 5%;">3</span><span style="color: #000;font-size: 0.8em;font-weight: 450;">Enter recipient's phone number</span></span>
                                        <span style="width: 95%"><span style="color: #fff;background-color: #000;width: 2em;height: 2em ;border-radius: 50%;padding: 8px;object-fit: cover;font-size: 0.5em;margin-right: 5%;">4</span><span style="color: #000;font-size: 0.8em;font-weight: 450;text-align: left;">Enter amount to transfer</span></span>
                                    </div>
                            </div>
                        </div>
                        <div class="card p-2" style="width: 85%;">
                            <div class="card-body">
                                <h1 class="card-title" style="text-align: left;font-size: 1.8em;font-weight: 600;">Transfer Benefits</h1>
                                    <div class="gap-3 mt-4" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;line-height: 12px;">
                                        <span style="width: 95%"><img :src="transfer" style="width: 2em;height: 2em;padding: 0.5em;background-color: lightgrey;border-radius: 50%;margin: 1%"><span style="color: #000;font-size: 0.8em;font-weight: 500; ">Instantly transfer to any mobile number</span></span>
                                        <span style="width: 95%"><img :src="transfer" style="width: 2em;height: 2em;padding: 0.5em;background-color: lightgrey;border-radius: 50%;margin: 1%"><span style="color: #000;font-size: 0.8em;font-weight: 500; ">No additional fees for transfers</span></span>
                                        <span style="width: 95%"><img :src="transfer" style="width: 2em;height: 2em;padding: 0.5em;background-color: lightgrey;border-radius: 50%;margin: 1%"><span style="color: #000;font-size: 0.8em;font-weight: 500; text-align: left;">Available across all major networks</span></span>
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
.collapse-enter-active, .collapse-leave-active {
  transition: max-height 0.4s ease-in-out;
  overflow: hidden;
}
.collapse-enter-from, .collapse-leave-to {
  max-height: 0;
}
.collapse-enter-to, .collapse-leave-from {
  max-height: 500px;
}

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