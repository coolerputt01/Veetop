<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';


const props = defineProps<{
  icon: string,
  head:string,
  desc:string,
  route: string,
}>();

</script>

<template>
    <div class="card p-3" style="border-radius: 14px;transition: all 0.3s;flex: 0 0 auto;">
      <div style="width: 100%; margin: 7%;">
        <img :src="icon" alt="Action Card VeerTop icon" style="width: 2.8em;height: 2.8em;background-color: lightgrey;border-radius: 50%;padding: 5%;box-sizing: border-box;transition: all 0.5s;">
      </div>
      <div class="card-body" style="line-height: 35px;">
        <h1 class="card-title" style="font-size: 1.5em;font-weight: 700;text-align: left;"> {{ head }}</h1>
        <p class="card-text" style="font-size: 0.9em;color: grey !important;font-weight: 400;text-align: left;">{{ desc }}</p>
      </div>
    </div>
</template>

<style scoped>
* {
    color: #000 !important;
}
.card:hover {
  cursor: pointer;
  transform: translateY(5%);
  box-shadow: 5px 5px 21px 0px rgba(0,0,0,0.25);
  img {
    background-color: grey !important;
  }
}
</style>