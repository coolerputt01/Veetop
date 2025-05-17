<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const dateNow = ref(new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short'
}));
console.log(dateNow.value)
</script>

<template>
    <div>
        <div>
            <span>
                <img src="" alt="">
            </span>
            <div>
                <h2>Mobile Data</h2>
                <p>{{ dateNow }}</p>
            </div>
            <div>
                <p>$900</p>
                <p> successful </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    color: #000 !important;
}
</style>