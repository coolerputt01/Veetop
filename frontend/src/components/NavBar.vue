<script setup lang="ts">
import { ref, computed ,watchEffect } from 'vue';
import type { Ref } from 'vue';

const checkSize = computed(() => window.innerWidth > 850);

import home from '@/assets/homew.svg';
import profile from '@/assets/profilew.svg';
import history from '@/assets/historyw.svg';
import data from '@/assets/dataw.svg';
import airtime from '@/assets/airtimew.svg';
import transfer from '@/assets/transferw.svg';

import homeFilled from '@/assets/home.svg';
import profileFilled from '@/assets/profile.svg';
import dataFilled from '@/assets/data.svg';
import airtimeFilled from '@/assets/airtime.svg';
import historyfilled from '@/assets/history.svg';
import transferFilled from '@/assets/transfer.svg';


import { useRouter, useRoute } from 'vue-router';

const homeImgPath: Ref<string> = ref(homeFilled);
const profileImgPath: Ref<string> = ref(profileFilled);
const bellImgPath: Ref<string> = ref(historyfilled);
const dataImgPath: Ref<string> = ref(dataFilled);
const airtimeImgPath: Ref<string> = ref(airtimeFilled);
const transferImgPath : Ref<string> = ref(transferFilled);

const router = useRouter();
const route = useRoute();

const selectedNav: Ref<string> = ref('');

const selectNav = (name: string = route.name as string) => {
  selectedNav.value = name;

  homeImgPath.value = homeFilled;
  airtimeImgPath.value = airtimeFilled;
  bellImgPath.value = historyfilled;
  dataImgPath.value = dataFilled;
  profileImgPath.value = profileFilled;
  transferImgPath.value = transferFilled;

  // Set selected icon to white
  switch (name) {
    case 'home':
      homeImgPath.value = home;
      router.push('/dashboard');
      break;
    case 'airtime':
      airtimeImgPath.value = airtime;
      router.push('/airtime');
      break;
    case 'history':
      bellImgPath.value = history;
      router.push('/history')
      break;
    case 'data':
      dataImgPath.value = data;
      router.push('/data');
      break;
    case 'profile':
      profileImgPath.value = profile;
      router.push('/profile');
      break;
    case 'transfer':
      transferImgPath.value = transfer;
      router.push('/transfer');
      break;
  }
};

watchEffect(() => {
  if (route.name) {
    selectedNav.value = route.name as string;
    selectNav(route.name as string);
  }
});
</script>

<template>
  <nav v-if="checkSize" class="nav" style="background-color: white;position: fixed;top: 13.5vh;width: 14vw;height: 100vh; z-index: 1000;">
    <ul style="height: 50vh;">
      <li class="nav-item" :class="{ selected: selectedNav === 'home' }" @mouseover="homeImgPath = home"
          @mouseleave="homeImgPath = selectedNav === 'home' ? home : homeFilled"
          @click="selectNav('home')">
        <img
          :src="homeImgPath"
          class="nav-link"
          alt="Home"
        />
        <span>Dashboard</span>
      </li>

      <li class="nav-item" :class="{ selected: selectedNav === 'airtime' }"  @mouseover="airtimeImgPath = airtime"
          @mouseleave="airtimeImgPath = selectedNav === 'airtime' ? airtime : airtimeFilled"
          @click="selectNav('airtime')">
        <img
          :src="airtimeImgPath"
          class="nav-link"
          alt="Airtime"
        />
        <span>Recharge</span>
      </li>

      <li class="nav-item" :class="{ selected: selectedNav === 'data' }" @mouseover="dataImgPath = data"
          @mouseleave="dataImgPath = selectedNav === 'data' ? data : dataFilled"
          @click="selectNav('data')">
        <img
          :src="dataImgPath"
          class="nav-link"
          alt="Data"
        />
        <span>Buy Data</span>
      </li>

      <li class="nav-item" :class="{ selected: selectedNav === 'transfer' }" @mouseover="transferImgPath = transfer"
          @mouseleave="transferImgPath = selectedNav === 'transfer' ? transfer : transferFilled"
          @click="selectNav('transfer')">
        <img
          :src="transferImgPath"
          class="nav-link"
          alt=" transfer"
        />
        <span>Transfer</span>
      </li>

      <li class="nav-item" :class="{ selected: selectedNav === 'history' }" @mouseover="bellImgPath = history"
          @mouseleave="bellImgPath = selectedNav === 'history' ? history : historyfilled"
          @click="selectNav('history')">
        <img
          :src="bellImgPath"
          class="nav-link"
          alt=" History"
        />
        <span>History</span>
      </li>

      <li class="nav-item" :class="{ selected: selectedNav === 'profile' }" @mouseover="profileImgPath = profile"
          @mouseleave="profileImgPath = selectedNav === 'profile' ? profile : profileFilled"
          @click="selectNav('profile')">
        <img
          :src="profileImgPath"
          class="nav-link"
          alt="Profile"
        />
        <span>Profile</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
* {
  color: #000;
}
ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.nav-item > span {
  font-size: 0.9em;
  font-weight: 500;
  width: 100%;
}

li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: row;
  margin-top: 10%;
  padding-right: 16px;
  transition: all 0.5s;
  gap: 5%;
}

img {
  width: 2.4em;
  height: 2.4em;
  padding: 10px;
  mix-blend-mode: normal;
}

li:hover {
  transform: translateY(-5%);
  cursor: pointer;
  background-color: rgb(117, 117, 117) !important;
  border-radius: 14px;
  z-index: 100;
  span {
    color: #fff !important;
  }
}

.selected {
  background-color: #000;
  border-radius: 14px;
  color: #fff !important;
  span {
    color: #fff !important;
  }
}

nav {
  width: 11vh !important;
  height: 100vh !important;
  left: 0;
  padding: 12px !important;
}
</style>
