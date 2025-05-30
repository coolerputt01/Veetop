<script setup lang="ts">
import { ref , computed } from 'vue';
import type { Ref } from 'vue';

import airtimeFilled from '@/assets/airtime.svg';
import dataFilled from '@/assets/data.svg';
import transferFilled from '@/assets/transfer.svg';

import HistoryCard from '@/components/HistoryCard.vue';

import airtime from '@/assets/airtimew.svg';
import data from '@/assets/dataw.svg';
import transfer from '@/assets/transferw.svg';

const searchQuery: Ref<string> = ref('');

const checkSize = computed(() => window.innerWidth > 850);

const selectedRegex: Ref<string> = ref('all');
const airtimeImgPath: Ref<string> = ref(airtimeFilled);
const dataImgPath: Ref<string> = ref(dataFilled);
const transferImgPath: Ref<string> = ref(transferFilled);

const selectRegex = (name: string) => {
    selectedRegex.value = name;

    airtimeImgPath.value = airtimeFilled;
    dataImgPath.value = dataFilled;
    transferImgPath.value = transferFilled;

    switch(name) {
        case 'airtime':
            airtimeImgPath.value = airtime;
            break;
        case 'data':
            dataImgPath.value = data;
            break;
        case 'transfer':
            transferImgPath.value = transfer;
            break;
    }
}

const transactions = ref([
  { title: 'Airtime Purchase', number: '08012345678', date: '5/19/2025', amount: -1000, successful: true, type: 'airtime' ,sim:'MTN'},
  { title: 'Data Bundle (3GB for 30 days)', number: '08123456789', date: '5/20/2025', amount: -1500, successful: true, type: 'data',sim:'Airtel'},
  { title: 'Transfer', number: '07098765432', date: '5/21/2025', amount: -5000, successful: true, type: 'transfer',sim:'MTN'},
  { title: 'Airtime Purchase', number: '08099998888', date: '5/22/2025', amount: -700, successful: false, type: 'airtime',sim:'Glo' },
  { title: 'Transfer', number: '07012345678', date: '5/22/2025', amount: -2500, successful: true, type: 'transfer',sim:'MTN'},
]);

const filteredTransactions = computed(() => {
  return transactions.value.filter((transaction) => {
    const matchesType = selectedRegex.value === 'all' || transaction.type === selectedRegex.value;
    if(searchQuery.value.length != 0){
        const matchesSearch =
        transaction.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        transaction.number.includes(searchQuery.value);
        return matchesType && matchesSearch;
    }else {
        return matchesType;
    }
  });
});
</script>

<template>
    <main class="container-fluid">
       <section>
            <section class=" main p-4" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column;color: #000;overflow-x: hidden;overflow-y: scroll;height: 86vh;scroll-behavior: smooth;" :style="{marginLeft: checkSize ? '14vw' :'none',borderLeft: checkSize ? '1px solid lightgray': 'none' }">
                <div style="width: 100%;">
                    <h2 style="color: #000;text-align: left;font-weight:600;">Transaction History</h2>
                    <p style="color: grey;text-align: left;">View all your past transactions</p>
                </div>
                <section style="display: flex;justify-content: flex-start;align-items: center;width: 100%;gap: 5%;" :style="{ flexDirection : checkSize ? 'row' : 'column'}">
                    <div :class="{'p-4' : !checkSize}" class="card p-3" style="width: 100%;box-sizing: border-box;">
                        <div style="display: flex;justify-content: center;align-items: space-between;gap: 12%" :style="{ flexDirection: checkSize ? 'row':'column' }">
                            <div style="width: 100%;">
                                <h3 style="color: #000;text-align: left;font-weight:600;font-size: 1.5em;" :style="{fontSize: checkSize ? '1.5em' : '1.2em'}">Your Transactions</h3>
                                <p style="color: grey;text-align: left;font-size: 0.8em;line-height: 16px;">View and filter your transaction history</p>
                                <div style="display: flex;justify-content: flex-start;align-items: center;gap: 2%;width: 50%;">
                                    <div class="regex" :class="{ selected: selectedRegex === 'all' }"  @click="selectRegex('all')" style="border: 1px solid lightgray;padding: 8px;border-radius: 8px;cursor: pointer;transition: all 0.3s;">
                                        <span style="font-weight: 600;font-size: 0.8em;">All</span>
                                    </div>
                                    <div class="regex" :class="{ selected: selectedRegex === 'airtime' }"  @click="selectRegex('airtime')" style="border: 1px solid lightgray;padding: 8px;border-radius: 8px;cursor: pointer;display: flex;justify-content: center;align-items: center;transition: all 0.3s;">
                                        <img :src="airtimeImgPath" class="nav-links" alt="VeeTop Airtime Veetop" style="width: 1.1em;height: 1.1em;margin: 5%;padding: 2%;">
                                        <span style="font-weight: 600;font-size: 0.8em;">Airtime</span>
                                    </div>
                                    <div class="regex" :class="{ selected: selectedRegex === 'data' }"  @click="selectRegex('data')" style="border: 1px solid lightgray;padding: 8px;border-radius: 8px;cursor: pointer;display: flex;justify-content: center;align-items: center;transition: all 0.3s;transition: all 0.3s;">
                                        <img :src="dataImgPath" class="nav-links" alt="VeeTop Airtime Veetop" style="width: 1.1em;height: 1.1em;margin: 5%;padding: 2%;">
                                        <span style="font-weight: 600;font-size: 0.8em;">Data</span>
                                    </div>
                                    <div class="regex" :class="{ selected: selectedRegex === 'transfer' }"  @click="selectRegex('transfer')" style="border: 1px solid lightgray;padding: 8px;border-radius: 8px;cursor: pointer;display: flex;justify-content: center;align-items: center;transition: all 0.3s;transition: all 0.3s;">
                                        <img :src="transferImgPath" class="nav-links" alt="VeeTop Airtime Veetop" style="width: 1.1em;height: 1.1em;margin: 5%;padding: 2%;">
                                        <span style="font-weight: 600;font-size: 0.8em;">Transfers</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input v-model="searchQuery" class="m-3" type="text" style="border: 1px solid grey;outline: none;border-radius: 10px;font-size: 0.9em;padding: 6px;" placeholder="&#128269; Search transactions">
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mt-5" style="width: 100%;">
                    <ul class="list-group">
                        <HistoryCard
                        v-for="(tx, index) in filteredTransactions"
                        :key="index"
                        :title="tx.title"
                        :number="tx.number"
                        :date="tx.date"
                        :amount="tx.amount"
                        :successful="tx.successful"
                        :sim="tx.sim"
                        :job="tx.type"
                        />
                        <li class="list-group-item p-3">
                            <div style="width: 100%;text-align: center;">
                                <span href="#" style="color: grey;text-decoration: none;font-weight: 500;font-size: 0.9em;cursor: pointer;">
                                    Showing {{ filteredTransactions.length }} of {{ transactions.length }} transactions
                                </span>
                            </div>
                        </li>
                    </ul>
                </section>
            </section>
       </section>
    </main>
</template>
<style scoped>
* {
    color: #000;
}
.regex:hover {
    opacity: 0.8;
}
.selected {
  background-color: #000;
  border-radius: 14px;
  color: #fff !important;
  span {
    color: #fff !important;
  }
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
</style>