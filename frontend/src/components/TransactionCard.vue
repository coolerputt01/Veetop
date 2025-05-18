<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const dateNow = ref(new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short'
}));
</script>

<template>
    <li style="width: 100%; display: flex; justify-content: space-around; align-items: center;gap: 3em; padding: 1.5em 0; border-bottom: 1px solid lightgrey;">
    <!-- Left section -->
    <div style="display: flex; align-items: center; gap: 1em;">
      <img
        v-lazy="'/src/assets/up.svg'"
        alt="Transaction Icon"
        style="width: 2.6em; height: 2.6em; object-fit: cover;"
      />
      <div style="line-height: 1.2;">
        <h2 style="font-weight: 600; font-size: 1.2em; margin: 0;">Mobile Data</h2>
        <p style="font-size: 0.9em; margin: 0;">{{ dateNow }}</p>
      </div>
    </div>

    <!-- Right section -->
    <div style="text-align: right; line-height: 1.2;">
      <p style="font-weight: 900; background-color: lightgrey; padding: 5px 10px; margin: 0;">$900</p>
      <p style="font-size: 0.9em; margin: 0;">Successful</p>
    </div>
  </li>
</template>

<style scoped>
* {
    color: #000 !important;
}
</style>