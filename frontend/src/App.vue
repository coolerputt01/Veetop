<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import NavBar from './components/NavBar.vue';
import TopBar from './components/TopBar.vue';

import { RouterView } from 'vue-router';

const route = useRoute();

const listOfRoutes = ['landing','verify','login','signup'];
const showNavBar = computed(() => {
  const checkRoute : boolean = !listOfRoutes.includes(route.name as string);
  return checkRoute;
})
</script>

<template>
  <TopBar v-if="showNavBar"/>
  <NavBar v-if="showNavBar" />
  <RouterView />
</template>