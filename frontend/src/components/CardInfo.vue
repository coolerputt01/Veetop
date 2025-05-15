<script setup lang="ts">
import { defineProps , ref } from 'vue';
import type { Ref } from 'vue';

const { cardTitle , cardDesc} = defineProps<{
  cardTitle:string,
  cardDesc: string
}>();
const isCardHovered : Ref<boolean> = ref(false);
</script>

<template>
  <div class="card row p-3 m-2" style="width: 18rem;flex:0 0 auto;background-color: rgba(0, 0, 0, 0.9);border-radius: 28px;border: 2px solid grey;transition: all 0.3s;cursor:pointer;" :class="{'card-hovered':isCardHovered}" @mouseover="isCardHovered=true" @mouseleave="isCardHovered=false">
    <div>
      <h3 class="text-white" style="font-weight: 700;z-index: 1;"> {{ cardTitle }}</h3>
    </div>
    <div>
      <p class="text-white" style="color: grey;font-weight: 500;z-index: 1;"> {{ cardDesc }}</p>
    </div>
  </div>
</template>
<style scoped>
.card {
  background-image:
    linear-gradient(to right, #ffffff0e 1px, transparent 1px),
    linear-gradient(to bottom, #ffffff0e 1px, transparent 1px);
  background-size: 72px 72px; /* size of each square */
  position: relative;
}

.card-hovered {
  -webkit-box-shadow: 5px 5px 19px 6px rgba(0,0,0,0.13); 
  box-shadow: 5px 5px 19px 6px rgba(0,0,0,0.13);
  transform: translateX(3%);
  scale: 1.02;
}
</style>