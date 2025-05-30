<script setup lang="ts">
import { ref ,computed , onBeforeMount} from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';

import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '@/scripts/firebase';
import { getUser } from '@/scripts/firebase';


import TransactionCard from '@/components/TransactionCard.vue';

import walletClosed from '@/assets/wallet-eye-closed.svg';
import wallet from '@/assets/wallet-eye.svg';
import menuIcon from '@/assets/menub.svg';

import ActionCard from '@/components/ActionCard.vue';
import call from '@/assets/airtime.svg';
import data from '@/assets/data.svg';
import transfer from '@/assets/transfer.svg';
import history from '@/assets/history.svg';

const walletShow : Ref<boolean> = ref(true);

const router = useRouter();

const imgSrc = computed(() => walletShow.value ? wallet : walletClosed);
const checkSize = computed(() => window.innerWidth > 850);
const username : Ref<string> = ref('');

onBeforeMount( async () => {
    const name = await getUser();
    if(name) {
        username.value = name;
    }
});
 
</script>

<template>
    <main class="container-fluid">
       <section>
            <section class="main p-4" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;color: #000;overflow-x: hidden;overflow-y: scroll;height: 86vh;scroll-behavior: smooth;" :style="{marginLeft: checkSize ? '14vw' :'none',borderLeft: checkSize ? '1px solid lightgray': 'none' }">
                <div style="width: 100%;">
                    <h2 style="color: #000;text-align: left;font-weight:600;">Welcome back, {{ username }}!</h2>
                    <p style="color: grey;text-align: left;">Manage your airtime and data packages</p>
                </div>
                <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                    <div class="grid p-4 mt-5" style="width: 80%;background-color: #000;border-radius: 12px;">
                        <span>
                            <h1 style="font-size: 1.8em;text-align: left;font-weight: 500;">Account Balance</h1>
                            <p style="font-size: 0.9em;text-align: left;color: lightgrey;font-weight: 550;">Available for transactions</p>
                        </span>
                        <span style="display: flex;justify-content: flex-start;align-items: center;width: 100%;flex-direction: column;">
                            <span style="font-weight: 700;font-size: 2.4em;width: 100%;">&#8358;500</span>
                            <div style="width: 100%;">
                                <button class="p-2" style="background-color: #fff;border-radius: 50px;color: #000;font-size: 0.8em;font-weight: 550;transition: all 0.3s;outline: none;border: none;">Add Money</button>
                            </div>
                        </span>
                    </div>
                </div>
                <section class="container mt-5">
                    <div>
                        <h3 style="color: #000;font-size: 1.5em;font-weight: 600;">Quick Actions</h3>
                    </div>
                    <div class=" card-g mt-4" style="display: flex;justify-content: flex-start;gap: 5%;padding-bottom: 45px;align-items: center;width:100%;overflow-x: scroll;overflow-y: hidden;">
                        <ActionCard head="Buy Airtime" desc="Purchase airtime for yourself" route="/airtime" :icon="call"/>
                        <ActionCard head="Buy Data" desc="Purchase data bundles" route="/data" :icon="data"/>
                        <ActionCard head="Transfer" desc="Send airtime or data" route="/transfer" :icon="transfer"/>
                        <ActionCard head="History" desc="View your transactionss" route="/history" :icon="history"/>
                    </div>
                </section>
                <section class="container mt-4">
                    <div>
                        <h3 style="color: #000;font-size: 1.5em;font-weight: 600;">Recent Transactions</h3>
                        <div class="mt-5">
                            <ul class="list-group">
                                <TransactionCard title="Airtime Purchase" number="08012345678" date="5/19/2025" :amount="-1000" :successful="true"/>
                                <li class="list-group-item" style="background-color: #fbffcf;">
                                    <div style="width: 100%;text-align: center;">
                                        <span href="#" style="color:#000;text-decoration: none;font-weight: 600;cursor: pointer;">See all transactions</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
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
.topup-card:hover {
    background-color: lightgrey;
    opacity: 0.6;
    cursor: pointer;
}

.card-g::-webkit-scrollbar {
    height: 5px;
}

.card-g::-webkit-scrollbar-track {
    background: transparent; /* Light gray track */
    border-radius: 8px;
}

.card-g::-webkit-scrollbar-thumb {
    background-color: #000; /* Customize to match your theme */
    border-radius: 8px;
}

.main::-webkit-scrollbar {
    height: 3px;
    width: 8px;
}

.main::-webkit-scrollbar-track {
    background: transparent; /* Light gray track */
    border-radius: 8px;
}

.main::-webkit-scrollbar-thumb {
    background-color: #000; /* Customize to match your theme */
    border-radius: 8px;
    cursor: pointer;
}
.navbar-toggler:hover .navbar-toggler:focus .navbar-toggler:active {
    border: none !important;
    outline: none !important;
}


@media (max-width:1020px) {
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
    .lli {
        justify-content: center !important;
        width: 100% !important;
        flex-direction: column !important;
    }
    
}
</style>