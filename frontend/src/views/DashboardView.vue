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
       <section>
            <nav class="navbar navbar-expand-lg justify-content-around">
                <a href="#" class="navbar-brand"><h1 class="h5 display-1" style="font-weight: 600;color:grey;font-size: 2.4em;"><span style="color: #000">Vee</span>Top</h1></a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div>
                            <h3 style="color: grey;font-weight: 400;text-align: center;font-size: 1.2em;">Balance</h3>
                            <p style="color: #000;font-weight: 600;text-align: center;font-size: 1.8em;">#500</p>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div style="cursor: pointer;">
                            <img v-lazy="'/src/assets/notification.svg'" alt="VeeTop notification icon" style="width: 2em;height: 2em;">
                        </div>
                    </li>
                    <li class="nav-item" style="display: flex;justify-content: center;align-items: center;">
                        <div>
                            <img v-lazy="'/src/assets/profile.svg'" alt="VeeTop profile icon" style="width: 2em;height: 2em;">
                        </div>
                        <div>
                            <p style="color: #000;font-weight: 600;">coolerputt01</p>
                        </div>
                        <div>
                            <button class="p-2" style="border: 1px solid grey;color: #000;background-color: transparent;border-radius: 12px;">Logout</button>
                        </div>
                    </li>
                </ul>
            </nav>
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