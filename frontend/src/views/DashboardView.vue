<script setup lang="ts">
import { ref ,computed} from 'vue';
import type { Ref } from 'vue';

import walletClosed from '@/assets/wallet-eye-closed.svg';
import wallet from '@/assets/wallet-eye.svg';

import TransactionCard from '@/components/TransactionCard.vue';

const walletShow : Ref<boolean> = ref(true);

const imgSrc = computed(() => walletShow.value ? wallet : walletClosed);

</script>

<template>
    <main class="container-fluid">
        <section style="overflow: hidden;">
            <header style="width:100vw;height: 9vh;padding: 12px;display: flex;justify-content: space-around;align-items: center;flex-direction: row;">
                <span style="display: flex;justify-content: flex-start;align-items: center;flex-direction: row;gap:1.3em;height: 100%;width: 75%">
                    <div>
                        <img style="width:2em;height: 2em;object-fit: cover;border-radius: 50%;" v-lazy="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsw40RqD54BYg7g04mBOm0f2k24h2hhn8-gg&s'" alt="VeeTop User">
                    </div>
                    <div style="line-height: 5px;">
                        <h1 style="font-size: 1.3em;font-weight: 700;">Welcome</h1>
                        <p style="font-size: 1em;font-weight:5600;">coolerputt</p>
                    </div>
                </span>
                <span>
                    <img v-lazy="'/src/assets/notification.svg'" alt="Veetop Notification icon" style="width:2em;cursor: pointer;height: 2em;object-fit: cover;">
                </span>
            </header>
            <section style="display: flex;justify-content: center;align-items: center;width: 100%; margin-top: 2em;">
                <div class="grid" style="background-color: #000;display: flex;justify-content: center;align-items: center;flex-direction: column; width: 80vw;padding: 32px;flex: 0 0 auto;border-radius: 19px;">
                    <span style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
                        <h1 style="color: lightgrey;font-size: 1.3em;font-weight: 600;height: 100%;">Wallet <img :src="imgSrc" alt="VeeTop Wallet View Toggle" style="width:1.1em;height: 1.1em;object-fit: cover;cursor: pointer;" @click="walletShow = !walletShow"></h1>
                        <span>
                            <p style="color: #fff;font-size: 1em;font-weight: 600;height: 100%; cursor: pointer;">History <img v-lazy="'/src/assets/right.svg'" alt="VeeTop History Icon" style="width: 1.1em;height: 1.1em;object-fit: cover;"></p>
                        </span>
                    </span>
                    <span style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
                        <p style="font-size: 2em;font-weight: 900;">
                            <span v-if="walletShow">$4,000</span>
                            <span v-else>****</span>
                        </p>
                        <div>
                            <button style="text-align: center;background-color: #fff;transition: all 0.3s;color:#000;padding:9px;font-size:1.1em;font-weight:600;border-radius: 50px;outline: none;border: none;">Add funds</button>
                        </div>
                    </span>
                </div>
            </section>
            <section>
                <div>
                    <span class="transaction-table" style="display: flex;border-bottom:1px solid #000;padding: 1.3em;justify-content: space-between;align-items: center;width: 100%;margin-top: 2em;">
                        <h2 style="font-size: 1.4em;">Recent transactions</h2>
                        <p style="font-size: 1.1em;cursor: pointer;transition: all 0.5s;"> view all <img v-lazy="'/src/assets/black-right.svg'" alt="VeeTop History Icon" style="width: 1.1em;height: 1.1em;object-fit: cover;mix-blend-mode: darken;"></p>
                    </span>
                    <ul>
                        <TransactionCard />
                    </ul>
                </div>
            </section>
        </section>
    </main>
</template>
<style>
* {
    color: #fff;
}

.grid {
  background-image:
    linear-gradient(to right, #ffffff27 1px, transparent 1px),
    linear-gradient(to bottom, #ffffff2c 1px, transparent 1px);
  background-size: 48px 48px; /* size of each square */
}
button:hover {
    opacity: 0.8;
}
.transaction-table > * {
    color: #000;
}
.transaction-table > p:hover {
    font-weight: 600;
    transform:  translateX(4%) ;
}
</style>