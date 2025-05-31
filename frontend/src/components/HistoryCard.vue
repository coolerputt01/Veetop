<script setup lang="ts">
import { type Ref , ref , watchEffect } from 'vue';

import airtime from '@/assets/airtime.svg';
import transfer from '@/assets/transfer.svg';
import data from '@/assets/data.svg';

const imgPath : Ref<string> = ref('')

const props = defineProps<{
    title: string,
    number: string,
    date: string,
    amount: number,
    successful: boolean,
    sim: string,
    job: string,
}>();

watchEffect(() => {
  switch (props.job.toLowerCase()) {
    case 'airtime':
      imgPath.value = airtime;
      break;
    case 'data':
      imgPath.value = data;
      break;
    case 'transfer':
      imgPath.value = transfer;
      break;
    default:
      imgPath.value = airtime; // fallback
  }
});
</script>
<template>
    <li class="list-group-item" style="display: flex;justify-content: space-between;align-items: center;flex-direction: row;">
        <div style="display: flex;justify-content: center;align-items: center;">
            <img :src="imgPath" alt="VeeTop History Card" style="width: 2.1em;height: 2.1em;background-color: lightgrey;border-radius: 50%;padding: 8px;margin: 5px;">
            <span style="line-height: 2px;">
                <h4 style="font-size: 1.1em;font-weight: 600;margin-bottom: 7%;">{{ title }}</h4>
                <div style="display: flex;justify-content: flex-start;align-items: center;">
                    <p style="color: grey;font-size: 0.8em;text-align: left;">{{number}}</p> 
                    <div style="margin: 0.3%;width: 0.3em;height: 0.3em;">   </div>
                    <p style="color: grey;font-size: 0.8em;text-align: left;">{{ sim }}</p>
                </div>
                <span style="color: grey;font-size: 0.8em;text-align: left;"> {{ date }}</span>
            </span>
        </div>
        <span v-if="successful" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;">
            <span v-if="amount > 0" style="color: #000;font-weight: 650;font-size: 1.2em;">&#8358;{{ amount }}</span>
            <span v-else style="color: red;font-weight: 650;font-size: 1em;">&#8358;{{ amount }}</span>
            <span style="background-color: lightgreen;color: green;width: 100%;text-align: center;border-radius: 50px;font-size: 0.7em;font-weight: 500;padding: 5px;margin: 3%;">completed</span>
        </span>
        <span v-else>
            <p style="color: #000;font-weight: 650;font-size: 1em;">&#8358;{{ amount }}</p>
            <span style="background-color: lightcoral;color: red;width: 100%;text-align: center;border-radius: 50px;font-size: 0.7em;font-weight: 500;padding: 5px;margin: 3%;">uncompleted</span>
        </span>
    </li>
</template>
<style scoped>
.list-group-item  > *{
    color: #000 !important;
}
</style>