<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import homeFilled from '@/assets/home-fill.svg';
import home from '@/assets/home.svg';

import profileFilled from "@/assets/profile-fill.svg";
import profile from '@/assets/profile.svg';

import { useRoute } from 'vue-router';

const homeImgPath : Ref<string>  = ref('');
const profileImgPath : Ref<string>  = ref('');

const route = useRoute();
switch(route.name) {
    case "dashboard":
        homeImgPath.value = homeFilled;
        profileImgPath.value = profile;
        break;
    case "data":
        console.log("Data route/n");
        break;
}

</script>

<template>
    <nav class="nav justify-content-between" style="position: fixed;bottom: 0;width: 100vw;height: 7vh;background-color: #fff; z-index: 1000;">
        <li class="nav-item">
            <img :src="homeImgPath" class="nav-link" alt="VeeTop NavBar icon" style="width: 3.2em;height: 3.2em;transition: all 0.5s; object-fit:cover;">
        </li>
        <li class="nav-item">
            <img v-lazy="'/src/assets/notification.svg'" class="nav-link" alt="VeeTop NavBar icon" style="width: 3.2em;height: 3.2em;transition: all 0.5s; object-fit:cover;">
        </li>
        <li class="nav-item">
            <img :src="profileImgPath" class="nav-link" alt="VeeTop NavBar icon" style="width: 3.2em;height: 3.2em;transition: all 0.5s; object-fit:cover;">
        </li>
    </nav>
</template>

<style scoped>
    * {
        color: #000;
    }
    img:hover {
        transform: translateY(-10%);
        cursor: pointer;
        background-color: lightgrey;
        border-radius: 50%;
    }
    @media (min-width:768px) {
        nav {
            width:11vh !important;
            height: 100vh !important;
            left:0;
            padding: 12px !important;
        }
    }

</style>