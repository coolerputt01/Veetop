<script setup lang="ts">
import { ref ,computed} from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';

import NavBar from '@/components/NavBar.vue';

import walletClosed from '@/assets/wallet-eye-closed.svg';
import wallet from '@/assets/wallet-eye.svg';

import TransactionCard from '@/components/TransactionCard.vue';

const walletShow : Ref<boolean> = ref(true);

const router = useRouter();

const imgSrc = computed(() => walletShow.value ? wallet : walletClosed);

</script>

<template>
    <main class="container-fluid">
        <section class="layout" style="overflow: hidden;display: flex;align-items: center;justify-content: center;flex-direction: column;">
            <section class="lhs">
                <header style="width:100vw;height: 9vh;padding: 12px;display: flex;justify-content: space-around;align-items: center;flex-direction: row;">
                    <span style="display: flex;justify-content: flex-start;align-items: center;flex-direction: row;gap:1.3em;height: 100%;width: 75%">
                        <div>
                            <img style="width:2em;height: 2em;object-fit: cover;border-radius: 50%;" v-lazy="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsw40RqD54BYg7g04mBOm0f2k24h2hhn8-gg&s'" alt="VeeTop User">
                        </div>
                        <div style="line-height: 5px;">
                            <h1 style="font-size: 1.3em;font-weight: 700;color:#000">Welcome</h1>
                            <p style="font-size: 1em;font-weight:600;color:#000">coolerputt</p>
                        </div>
                    </span>
                    <span>
                        <img v-lazy="'/src/assets/notification.svg'" alt="Veetop Notification icon" style="width:2em;cursor: pointer;height: 2em;object-fit: cover;">
                    </span>
                </header>
                <section style="display: flex;justify-content: center;align-items: center;width: 100%; margin-top: 2em;">
                    <div class="grid" style="background-color: #000;display: flex;justify-content: center;align-items: center;flex-direction: column; width: 80vw;padding: 32px;border-radius: 19px;">
                        <span style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
                            <h1 style="color: lightgrey;font-size: 1.3em;font-weight: 600;height: 100%;">Wallet <img :src="imgSrc" alt="VeeTop Wallet View Toggle" style="width:1.1em;height: 1.1em;object-fit: cover;cursor: pointer;" @click="walletShow = !walletShow"></h1>
                            <span>
                                <p style="color: #fff;font-size: 1em;font-weight: 600;height: 100%; cursor: pointer;">Logs <img v-lazy="'/src/assets/right.svg'" alt="VeeTop History Icon" style="width: 1.1em;height: 1.1em;object-fit: cover;"></p>
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
                <section style="margin-top: 3em;" class="topup-sec">
                    <div style="display: flex;justify-content: center;align-items: center;flex-direction: row;gap:5%;">
                        <div class="topup-card" style="width:30vw;height: 30vw;transition: all 0.5s; cursor:pointer;border-radius:14% ;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 24px;" @click.stop="router.push('/airtime')">
                            <img v-lazy="'/src/assets/airtime.svg'" alt="VeTop Airtime Top-up Icon" style="width: 3.7em;height: 3.7em;object-fit: cover;background-color: lightgrey;mix-blend-mode: difference; border-radius: 50%;padding:12px;">
                            <p style="padding: 2px;color: #000;font-weight: 700;text-align: center;">Airtime</p>
                        </div>
                        <div class="topup-card" style="width:30vw;height: 30vw;transition: all 0.5s; cursor:pointer;border-radius:14% ;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 24px;">
                            <img v-lazy="'/src/assets/data.svg'" alt="VeTop Airtime Top-up Icon" style="width: 3.7em;height: 3.7em;object-fit: cover;background-color: lightgrey;mix-blend-mode: difference; border-radius: 50%;padding:12px;">
                            <p style="padding: 2px;color: #000;font-weight: 700;text-align: center;">Data</p>
                        </div>
                        <div class="topup-card" style="width:30vw;height: 30vw;transition: all 0.5s; cursor:pointer;border-radius:14% ;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 24px;">
                            <img v-lazy="'/src/assets/gift.svg'" alt="VeTop Airtime Top-up Icon" style="width: 3.7em;height: 3.7em;object-fit: cover;background-color: lightgrey;mix-blend-mode: difference; border-radius: 50%;padding:12px;">
                            <p style="padding: 2px;color: #000;font-weight: 700;text-align: center;">Gift</p>
                        </div>
                    </div>
                </section>
            </section>
            <section style="width: 100vw;">
                <div>
                    <span class="transaction-table" style="display: flex;border-bottom:1px solid #000;padding: 1.3em;justify-content: space-between;align-items: center;width: 100%;margin-top: 2em;">
                        <h2 style="font-size: 1.4em;">Recent transactions</h2>
                        <a style="font-size: 1.1em;cursor: pointer;transition: all 0.5s;text-decoration: none;color: #00c3ff;" href="#"> view all <img v-lazy="'/src/assets/black-right.svg'" alt="VeeTop History Icon" style="width: 1.1em;height: 1.1em;object-fit: cover;mix-blend-mode: darken;"></a>
                    </span>
                    <div class="table" style="width: 100%; max-height: 50vh;;overflow-y: auto; scroll-behavior: smooth;margin-bottom: 2.8em;">
                        <div style="width: 100%; display: flex; flex-direction: column; align-items: center;overflow-y:scroll">
                            <TransactionCard v-for="i in 5" :key="i" date-time="18 May 2025, 16:04" amount="8000" vtu-plan="Mobile Data" :succesful="false" />
                        </div>
                    </div>
                </div>
            </section>
            <NavBar />
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
.topup-card:hover {
    background-color: lightgrey;
    opacity: 0.6;
    cursor: pointer;
}

.table::-webkit-scrollbar {
    height: 3px;
    width: 8px;
}

.table::-webkit-scrollbar-track {
    background: transparent; /* Light gray track */
    border-radius: 8px;
}

.table::-webkit-scrollbar-thumb {
    background-color: #000; /* Customize to match your theme */
    border-radius: 8px;
    cursor: pointer;
}

@media (min-width:768px) {
    .layout {
        flex-direction: row !important;
    }
    .lhs {
        width: 50vw !important;
        margin-right:10%;
        margin-left:13vh;
    }
    .table {
        max-height: 60vh !important;
    }
    .topup-card{
        height: 18vw !important;
        width: 18vw !important;
    }
    header {
        width: 97vw !important;
        height: 12vh !important;
    }
}
</style>