<script setup lang="ts">
    defineProps<{
        title: string,
        number: string,
        date: string,
        amount: number,
        successful: boolean
    }>();
</script>
<template>
    <li class="list-group-item" style="display: flex;justify-content: space-between;align-items: center;flex-direction: row;">
        <span>
            <h4 style="font-size: 1.2em;font-weight: 600;">{{ title }}</h4>
            <div style="display: flex;justify-content: flex-start;align-items: center;">
                <p style="color: grey;font-size: 0.8em;text-align: left;">{{number}}</p> 
                <div style="margin: 0.3%;width: 0.3em;height: 0.3em;">   </div>
                <p style="color: grey;font-size: 0.8em;text-align: left;">{{ date }}</p>
            </div>
        </span>
        <span v-if="successful" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;">
            <p v-if="amount > 0" style="color: #000;font-weight: 650;font-size: 1.2em;">&#8358;{{ amount }}</p>
            <p v-else style="color: red;font-weight: 650;font-size: 1em;">&#8358;{{ amount }}</p>
            <span class="p-2" style="background-color: lightgreen;color: green;width: 100%;text-align: center;border-radius: 50px;font-size: 0.8em;font-weight: 500;">completed</span>
        </span>
        <span v-else>
            <p style="color: #000;font-weight: 650;font-size: 1em;">&#8358;{{ amount }}</p>
            <span class="px-2" style="background-color: lightcoral;color: red;width: 100%;text-align: center;border-radius: 50px;font-size: 0.8em;font-weight: 500;">uncompleted</span>
        </span>
    </li>
</template>
<style scoped>
.list-group-item  > *{
    color: #000 !important;
}
</style>