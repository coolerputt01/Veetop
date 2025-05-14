<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const email : Ref<string> = ref('');
const password : Ref<string> = ref('');

const isFocused : Ref<boolean> = ref(false);
</script>
<template>
    <main class="container-fluid" style="overflow: hidden;">
        <section style="display:flex;width:100vw;height: 100vh;align-items: center;padding:0;margin:0;flex-direction: column;">
            <form style="width:100vw;height:50vh;display: flex;justify-content: center;flex-direction: column;margin-top: 10em;">
                <h1 style="font-weight: 550;">Login</h1>
                <input placeholder="Enter your email" @focusin="isFocused = true" @focusout="isFocused = false" :class="{'focus':isFocused}" type="text" class="p-3" v-model="email" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <input placeholder="Enter your password" type="password" class="p-3" v-model="password" style="border-radius: 50px;border: 0.5px grey solid;width:70%;height:8%;outline:none;">
                <p class="text-dark">Don't have an account? <a href="#">signup here</a></p>
                <button type="submit" class="p-2 justify-content-center"style="color:#fff;cursor: pointer;font-size:1.05em;background-color: #000;border-radius: 50px;width: 50% ;text-align: center;">Login</button>
            </form>
            <p class="text" style="margin-top: 10em;color: grey;">Veetop is very sensitive with your information.&#128064;</p>
        </section>
    </main>
</template>
<style scoped>
.focus {
    outline: none;
}
form > * {
    margin: 0.4em;
}
button:hover {
    opacity: 0.8;
}
@media (min-width:768px) {
    .text {
        margin-top: 5em !important;
    }
}
</style>