<script setup lang="ts">
    defineProps<{
        dataAmount:number,
        data:number,
        days: number
;   }>();
</script>
<template>
    <p> {{ dataAmount }}</p>
    <p> {{ data }}gb</p>
    <p> {{ days }}</p>
</template>