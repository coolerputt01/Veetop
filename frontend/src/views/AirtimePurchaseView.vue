<script lang="js">
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
    <main style="width: 100%;margin: 0;padding: 0;">
        <section>
            <nav class="nav" style="display: flex;justify-content: left;align-items: center; width: 100vw;height: 13vh;background-color: #fff;">
                <li style="display: flex;justify-content: flex-start;align-items: center; width: 100vw;flex-direction: row">
                    <img v-lazy="'/src/assets/left.svg'" alt="VeeTop left arrow icon" class="nav-link" style="width: 3.2em;height: 3.2em;z-index: 1000;cursor: pointer;" @click="router.back()" >
                    <h1 style="font-size: 1.35em;font-weight: 600;">Top up Airtime</h1>
                </li>
            </nav>
        </section>
        
        <section>
            <span style="display: flex;justify-content: center;align-items: center;width: 70vw;flex-direction:column">
                <label for="number" style="font-weight: 660;font-size: 1.3em;border-bottom:1px solid lightgrey;margin: 9%;text-align: left;">Phone number</label>
                <div style="display: flex;justify-content: flex-start;align-items: center;">
                    <select class="form-select" aria-label="Default select example">
                        <option selected style="border-radius: 50% !important;">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <input type="number" placeholder="Enter your phone number" name="number" v-model="phone_number" style="padding: 12px;border-radius: 50px;border: 1px solid lightgray;">
                </div>
            </span>
        </section>
    </main>
</template>