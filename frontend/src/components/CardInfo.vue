<script setup lang="ts">
import { defineProps } from 'vue';

const { cardTitle , cardDesc} = defineProps<{
  cardTitle:string,
  cardDesc: string
}>();
</script>

<template>
  <div class="w-25 row p-3 m-2" style="background-color: #4af753;border-radius: 28px;">
    <div>
      <h3 class="text-white" style="font-weight: 600;"> {{ cardTitle }}</h3>
    </div>
    <div>
      <p class="text-white" style="color: grey;"> {{ cardDesc }}</p>
    </div>
  </div>
</template>
