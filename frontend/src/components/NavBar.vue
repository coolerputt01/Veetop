<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';

const checkSize = computed(() => window.innerWidth > 850);

import home from '@/assets/homew.svg';
import profile from '@/assets/profilew.svg';
import notification from '@/assets/bell.svg';
import data from '@/assets/dataw.svg';
import airtime from '@/assets/airtimew.svg';

import homeFilled from '@/assets/home.svg';
import profileFilled from '@/assets/profile.svg';
import dataFilled from '@/assets/data.svg';
import airtimeFilled from '@/assets/airtime.svg';
import bell from '@/assets/notification.svg';

const homeImgPath: Ref<string> = ref(homeFilled);
const profileImgPath: Ref<string> = ref(profileFilled);
const bellImgPath: Ref<string> = ref(bell);
const dataImgPath: Ref<string> = ref(dataFilled);
const airtimeImgPath: Ref<string> = ref(airtimeFilled);

const selectedNav: Ref<string> = ref('');

const selectNav = (name: string) => {
  selectedNav.value = name;

  homeImgPath.value = homeFilled;
  airtimeImgPath.value = airtimeFilled;
  bellImgPath.value = bell;
  dataImgPath.value = dataFilled;
  profileImgPath.value = profileFilled;

  // Set selected icon to white
  switch (name) {
    case 'home':
      homeImgPath.value = home;
      break;
    case 'airtime':
      airtimeImgPath.value = airtime;
      break;
    case 'notification':
      bellImgPath.value = notification;
      break;
    case 'data':
      dataImgPath.value = data;
      break;
    case 'profile':
      profileImgPath.value = profile;
      break;
  }
};
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

      <li class="nav-item" :class="{ selected: selectedNav === 'notification' }" @mouseover="bellImgPath = notification"
          @mouseleave="bellImgPath = selectedNav === 'notification' ? notification : bell"
          @click="selectNav('notification')">
        <img
          :src="bellImgPath"
          class="nav-link"
          alt="Notifications"
        />
        <span>Notifications</span>
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
