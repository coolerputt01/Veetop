<script setup lang="ts">
import CardInfo from '../components/CardInfo.vue';
import {ref} from 'vue';
import type { Ref } from 'vue'

function isMobile() {
  const regex = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}
const isMobileRef : Ref<boolean> = ref(isMobile());
console.log(isMobileRef.value);
</script>

<template>
  <main class="container-fluid bg-white">
    <section class="container-fluid my-4 d-flex justify-content-around gap-5 h-100">
      <div class="my-5">
        <span class="text-left">
          <h1 class="text-dark h1 display-1" style="font-weight: 600;"><span style="color: #4af753">Vee</span>Top</h1>
        </span>
        <h3 style="color: grey;font-weight: 400;font-size: medium;" class="text-left" >Internetworking made available for all...</h3>
        <button style="background-color: #4af753;cursor: pointer; border-radius: 50px;color:white;width:30vw;border:none;outline: none;" class="my-4 p-2"> Get Started</button>
      </div>
      <span>
        <img v-lazy="'https://i.ibb.co/C5gVkBLy/Veetop-Hand.png'" alt="Veetop Phone illustration" class="w-100 mx-3" v-show="!isMobileRef">
      </span>
    </section>
    <section class="d-flex justify-content-center">
      <CardInfo
        card-title="Instant Airtime & Data"
        card-desc="Top up airtime or data for any network in seconds—no queues, no stress, 24/7."/>
      <CardInfo
        card-title="Instant Airtime & Data"
        card-desc="Top up airtime or data for any network in seconds—no queues, no stress, 24/7."/>
      <CardInfo
        card-title="Instant Airtime & Data"
        card-desc="Top up airtime or data for any network in seconds—no queues, no stress, 24/7."/>
    </section>
  </main>
</template>
