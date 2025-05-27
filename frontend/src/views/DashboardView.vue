<script setup lang="ts">
import { ref ,computed , onBeforeMount} from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';

import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '@/scripts/firebase';

import axios from 'axios';

import NavBar from '@/components/NavBar.vue';

import walletClosed from '@/assets/wallet-eye-closed.svg';
import wallet from '@/assets/wallet-eye.svg';
import menuIcon from '@/assets/menub.svg';

import TransactionCard from '@/components/TransactionCard.vue';
const walletShow : Ref<boolean> = ref(true);

const router = useRouter();

const imgSrc = computed(() => walletShow.value ? wallet : walletClosed);
const checkSize = computed(() => window.innerWidth > 850);

const username : Ref<string> = ref('');

const getUser = async () => {
    const user = auth.currentUser;

    if (!user) {
        console.error("No user is currently signed in.");
        return;
    }

    try {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            username.value = userData.fullname;
        } else {
            console.error("User document not found.");
            return;
        }
    }catch(error: unknown) {
        if(error instanceof Error){
            console.error("A normal error occurred", error);
        }else if(axios.isAxiosError(error)) {
            console.error("An Axios Error", error);
        }else {
            console.error("A text error",error);
        }
    }
} 

onBeforeMount(() => {
    getUser();
});

</script>

<template>
    <main class="container-fluid">
       <section>
            <nav class="navbar navbar-expand-lg p-2" style="border-bottom: 0.1px solid lightgrey;">
                <div class="container-fluid" style="display: flex;justify-content: space-between;align-items: center;">
                    <a href="#" class="navbar-brand"><h1 class="h5 display-1" style="font-weight: 600;color:grey;font-size: 1.5em;"><span style="color: #000">Vee</span>Top</h1></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style="border: none;outline: none;" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img v-lazy="menuIcon" alt="VeeTop Menu icon" style="height: 1.2em;height: 1.2em;">
                    </button>
                    <div :style="{width: checkSize ? '50vw': '100vw' ,marginLeft: checkSize ? '30%':'0%',marginTop: !checkSize ? '5%':'0%'}" class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <div >
                                    <h3 style="color: grey;font-weight: 400;text-align: center;font-size: 0.9em;" :style="{textAlign: !checkSize ?'left':'center',marginLeft: !checkSize ? '10%':'0'}">Balance</h3>
                                    <p style="color: #000;font-weight: 600;text-align: center;font-size: 1.2em;" :style="{textAlign: !checkSize ?'left':'center',marginLeft: !checkSize ? '10%':'0'}">#500</p>
                                </div>
                            </li>
                        </ul>
                        <ul class="navbar-nav justify-content-between" style="width:38% !important;flex: 0 0 auto;">
                            <li class="nav-item" style="flex: 0 0 auto;">
                                <div style="cursor: pointer;">
                                    <p v-if="!checkSize" :style="{
                                        fontWeight: '600',
                                        color: '#000',
                                        marginLeft: checkSize ? '0' : '25%'
                                        }" >Notification</p>
                                    <img v-else v-lazy="'/src/assets/notification.svg'" alt="VeeTop notification icon" style="width: 2em;height: 2em;">
                                </div>
                            </li>
                            <li class="nav-item lli" style="display: flex;justify-content: space-around;align-items: center; width: 25vw !important">
                                <div style="display: flex;justify-content: center;align-items: center;flex: 0 0 auto" >
                                    <span v-if="checkSize">
                                        <div>
                                            <img v-lazy="'/src/assets/profile.svg'" alt="VeeTop profile icon" style="width: 1.5em;height: 1.5em;">
                                        </div>
                                        <div style="display: flex;justify-content: center;align-items: center;text-align: left;">
                                            <p style="color: #000;font-weight: 600;">{{ username }}</p>
                                        </div>
                                    </span>
                                    <p v-else style="font-weight: 600;color: #000;"> Profile</p>
                                </div>
                                <div>
                                    <button class="p-2" style="border: 1px solid grey;color: #000;background-color: transparent;border-radius: 8px;font-weight: 700;">Logout</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <NavBar />
            <section class="p-4" style="display: flex;justify-content: flex-start;align-items: center;flex-direction: column; color: #000;overflow-x: hidden;height: 86vh;" :style="{marginLeft: checkSize ? '14vw' :'none',borderLeft: checkSize ? '1px solid lightgray': 'none' }">
                <div style="width: 100%;">
                    <h2 style="color: #000;text-align: left;font-weight:600;">Welcome back, {{ username }}!</h2>
                    <p style="color: grey;text-align: left;">Manage your airtime and data packages</p>
                </div>
                <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
                    <div class="grid p-4 mt-5" style="width: 80%;background-color: #000;border-radius: 12px;">
                        <span>
                            <h1 style="font-size: 1.8em;text-align: left;">Account Balance</h1>
                            <p style="font-size: 0.9em;text-align: left;color: lightgrey;font-weight: 550;">Available for transactions</p>
                        </span>
                        <span style="display: flex;justify-content: flex-start;align-items: center;width: 100%;flex-direction: column;">
                            <span style="font-weight: 700;font-size: 2.4em;width: 100%;">&#8358;500</span>
                            <div style="width: 100%;">
                                <button class="p-2" style="background-color: #fff;border-radius: 50px;color: #000;font-size: 0.9em;font-weight: 500;">Add Money</button>
                            </div>
                        </span>
                    </div>
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