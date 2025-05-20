<script setup lang="js">
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
    <main style="width: 100%;margin: 0;padding: 0;position: relative;height: 100vh;">
        <section>
            <nav class="nav" style="display: flex;justify-content: left;align-items: center; width: 100vw;height: 13vh;background-color: #fff;">
                <li style="display: flex;justify-content: flex-start;align-items: center; width: 100vw;flex-direction: row">
                    <img v-lazy="'/src/assets/left.svg'" alt="VeeTop left arrow icon" class="nav-link" style="width: 3.2em;height: 3.2em;z-index: 1000;cursor: pointer;" @click="router.back()" >
                    <h1 style="font-size: 1.35em;font-weight: 600;">Top up Airtime</h1>
                </li>
            </nav>
        </section>
        
        <section>
            <span style="display: flex;justify-content: center;align-items: center;width: 100vw;flex-direction:column;height: 50vh;">
                <label for="number" style="font-weight: 660;font-size: 1.3em;border-bottom:1px solid lightgrey;margin: 4%;text-align: left;width: 50%;">Phone number</label>
                <div style="display: flex;align-items: center;justify-content: center;width: 100vw;padding: 30px;">
                <div style="display: flex;justify-content: center;align-items: center;border: 0.7px solid grey;border-radius: 50px;width: 70vw;gap:5%">
                    <details style="display: flex;align-items: center;justify-content: flex-start;transition: all 1s;" >
                        <summary class="form-select" style="border-radius: 50px !important;flex: 0 0 auto;border: none !important;">Plan</summary>
                        <ul style="position: absolute; width: 50vw;top:25% !important;left:15%;background-color: lightgray;border-radius: 14%;padding: 3%;box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.1);">
                            <li class="select" style="display: flex;width:100%;border-radius: 50px; justify-content: flex-start;transition: all 0.5s;align-items: center;gap:2%;padding: 1%;border-radius: 50px;cursor: pointer;"> <img v-lazy="'/src/assets/mtn.png'" alt="VeeTop MTN logo"style="width: 2em;height: 2em;border-radius: 50%;"> <p style="font-weight: 700;">MTN</p></li>
                            <li class="select" style="display: flex;width:100%;border-radius: 50px; justify-content: flex-start;transition: all 0.5s;align-items: center;gap:2%;padding: 1%;border-radius: 50px;cursor: pointer;"> <img v-lazy="'/src/assets/airtel.png'" alt="VeeTop MTN logo"style="width: 2em;height: 2em;border-radius: 50%;"> <p style="font-weight: 700;">Airtel</p></li>
                            <li class="select" style="display: flex;width:100%;border-radius: 50px; justify-content: flex-start;transition: all 0.5s;align-items: center;gap:2%;padding: 1%;border-radius: 50px;cursor: pointer;"> <img v-lazy="'/src/assets/glod.png'" alt="VeeTop MTN logo"style="width: 2em;height: 2em;border-radius: 50%;"> <p style="font-weight: 700;">Glo</p></li>
                        </ul>
                    </details>
                    <input class="number" type="number" placeholder="Enter your phone number" name="number" v-model="phone_number" style="padding: 12px;border-radius: 50px;border: none;">
                </div>
                </div>
            </span>
            <section style="margin-top:-1%;display: flex;justify-content: center;align-items: center;">
                <div style="width:70vw">
                    <button class="p-2" style="background-color: #000;color: #fff;border-radius: 50px;width: 100%;border: none;outline: none;transition: all 0.5s;"> Top Up</button>
                </div>
            </section>
        </section>
    </main>
</template>
<style scoped>
summary {
    cursor: pointer !important;
}
summary::marker {
  content: none;
}
ul > * {
    list-style: none;
    margin: 3%;
}
.select > * {
    margin: 3%;
}
.select:hover {
    background-color: grey;
    border: 0.5px solid #fff;
}
button:hover {
    opacity: 0.7;
}
.number:focus {
    outline: none;
    border: none;
}
</style>