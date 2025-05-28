<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import TopBar from './components/TopBar.vue';

import { RouterView } from 'vue-router';
</script>

<template>
  <TopBar />
  <NavBar />
  <RouterView />
</template>