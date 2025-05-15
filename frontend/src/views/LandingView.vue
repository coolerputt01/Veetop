<script setup lang="ts">
import CardInfo from '../components/CardInfo.vue';
import menuIcon from '@/assets/menu.svg'

import {ref} from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';

function isMobile(): boolean {;
  return ('ontouchstart' in window ||
    (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
  );
}
const isMobileRef : Ref<boolean> = ref(isMobile());

const isHovered : Ref<boolean> = ref(false);

const router = useRouter();
</script>

<template>
  <main class="container-fluid" style="margin: 0;padding: 0;scroll-behavior: smooth;overflow:hidden;">
    <header class="d-flex justify-content-end" style="background-color: #000;">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
           <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img v-lazy="menuIcon" alt="Menu SVG Icon" style="width: 1.5em;height: 1.5em;right:0 !important;">
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link p-2" href="#" style="color:#fff" @click.prevent="router.push('/signup')">Sign Up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-2 text-center" href="#" style="color:#000;background-color: #fff;border-radius: 50px;transition: all 0.5s;" :class="{'hovered':isHovered}" @mouseover="isHovered=true" @mouseleave="isHovered=false" @click.prevent="router.push('/login')">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <section class="d-flex justify-content-around grid" style="height: 45vh !important;padding-bottom:12em;background-color: #000;clip-path: polygon(
    0 0,         /* top-left */
    100% 0,      /* top- right */
    100% 80%,    /* partway down right side */
    0% 100%,    /* angled bottom corner */
    0 100%       /* bottom-left */
  );">
      <div class="my-5">
        <span class="text-left">
          <h1 class="h1 display-1" style="font-weight: 600;color:grey;"><span style="color: #fff">Vee</span>Top</h1>
        </span>
        <h3 style="color: grey;font-weight: 400;font-size: medium;" class="text-left" >Internetworking made available for all...</h3>
        <button style="background-color: #fff;cursor: pointer; border-radius: 50px;color:white;width:30vw;border:none;outline: none;color:#000;transition:all 0.3s;" class="my-4 p-2" :class="{'hovered':isHovered}" @mouseover="isHovered= true" @mouseleave="isHovered=false" @click.prevent="router.push('/signup')"> Get Started</button>
      </div>
      <span>
        <img v-lazy="'https://i.ibb.co/C5gVkBLy/Veetop-Hand.png'" alt="Veetop Phone illustration" class="w-100 mx-3" v-show="!isMobileRef">
      </span>
    </section>
    <h2 class="text-center m-3" style="font-size: 2em;font-weight: 700;text-shadow: 6px 6px 11px rgba(74,74,74,0.5);">Why choose us?</h2>
    <section class="card-group mb-5 d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-3">
      <CardInfo
        card-title="Instant Airtime & Data"
        card-desc="Top up airtime or data for any network in seconds—no queues, no stress, 24/7." />
      <CardInfo
        card-title="Affordable Pricing"
        card-desc="Enjoy unbeatable discounts on data and airtime. Save money on every transaction, every time."/>
      <CardInfo
        card-title="Easy & Secure"
        card-desc="Our platform is built for speed, security, and ease. Anyone can use it—effortlessly."/>
    </section>
    <footer class="p-4">
      <div class="d-flex justify-content-around">
        <h1 class="h1 display-1" style="font-weight: 600;font-size: 1.6em;color:grey;"><span style="color: #fff">Vee</span>Top</h1>
        <div style="display: flex;justify-content: center;align-items: center;flex-direction: column;width:100%;">
          <h2 class="card-title m-2 text-center" style="width:100%;font-size: 1.3em;font-weight: 700;">Tasks</h2>
          <ul class="d-flex justify-content-center row">
            <li style="list-style:none;text-decoration: underline; margin: 2%; text-align: center; color:grey;"> Buy Data & Airtime</li>
            <li style="list-style:none;text-decoration: underline; margin: 2%; text-align: center; color:grey;">Share Data and Airtime</li>
            <li style="list-style:none;text-decoration: underline; margin: 2%; text-align: center; color:grey;">Pay for bills</li>
          </ul>
        </div>
        <ul class="d-flex justify-content-center align-items-center row" style="height: 100%;width:100%;">
            <a style="list-style: none; text-align: center; color:lightgrey; text-decoration: none;cursor: pointer;z-index: 10;" href="# "@click.prevent="router.push('/login')"> Login </a>
            <a style="list-style: none; text-align: center; color:lightgrey; text-decoration: none;cursor: pointer;z-index: 10;" href="#" @click.prevent="router.push('/signup')">Sign Up</a>
          </ul>
      </div>
      <p style="color:grey" class="text-center m-3">2025 &copy all rights reserved.</p>
    </footer>
  </main>
</template>
<style scoped>
.grid {
  background-image:
    linear-gradient(to right, #ffffff27 1px, transparent 1px),
    linear-gradient(to bottom, #ffffff2c 1px, transparent 1px);
  background-size: 64px 64px; /* size of each square */
}
footer > div {
  width: 100%;
}
footer {
  position: relative;
  background-color: #000;
  width: 100vw;
}
footer::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('https://i.ibb.co/S4bprgzm/Vee-Top-people-image.png');
  opacity: 0.2;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
}
.hovered {
  opacity: 0.8;
}
</style>
