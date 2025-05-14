<script setup lang="ts">
import { defineProps } from 'vue';

const { cardTitle , cardDesc} = defineProps<{
  cardTitle:string,
  cardDesc: string
}>();
</script>

<template>
  <div class="card row p-3 m-2" style="width: 18rem;flex:0 0 auto;background-color: rgba(0, 0, 0, 0.9);border-radius: 28px;border: 2px solid grey">
    <div>
      <h3 class="text-white" style="font-weight: 700;"> {{ cardTitle }}</h3>
    </div>
    <div>
      <p class="text-white" style="color: grey;font-weight: 600;"> {{ cardDesc }}</p>
    </div>
  </div>
</template>
