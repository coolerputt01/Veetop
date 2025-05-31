<script setup lang="ts">
import { computed } from 'vue';
import { type Ref, ref , onBeforeMount} from 'vue';

import { getUser } from '@/scripts/firebase';

import { useRouter } from 'vue-router';

import menuIcon from '@/assets/menub.svg';
const checkSize = computed(() => window.innerWidth > 850);
const username : Ref<string> = ref('');

const router = useRouter();

onBeforeMount( async () => {
    const name = await getUser();
    if(name) {
        username.value = name;
    }
});


</script>


<template>
    <nav class="navbar navbar-expand-lg" style="border-bottom: 0.1px solid lightgrey;padding: 0;padding-top: 1%;">
        <div class="container-fluid" style="display: flex;justify-content: space-between;align-items: center;">
            <a href="#" class="navbar-brand"><h1 class="h5 display-1" style="font-weight: 600;color:grey;font-size: 1.2em;"><span style="color: #000">Vee</span>Top</h1></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style="border: none;outline: none;" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img v-lazy="menuIcon" alt="VeeTop Menu icon" style="height: 1.2em;height: 1.2em;">
            </button>
            <div :style="{width: checkSize ? '50vw': '100vw' ,marginLeft: checkSize ? '30%':'0%',marginTop: !checkSize ? '5%':'0%'}" class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div >
                            <h3 style="color: grey;font-weight: 400;text-align: center;font-size: 0.8em;" :style="{textAlign: !checkSize ?'left':'center',marginLeft: !checkSize ? '10%':'0'}">Balance</h3>
                            <p style="color: #000;font-weight: 600;text-align: center;font-size: 1.2em;" :style="{textAlign: !checkSize ?'left':'center',marginLeft: !checkSize ? '10%':'0'}">#500</p>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav justify-content-between" style="width:38% !important;flex: 0 0 auto;">
                    <li class="nav-item" style="flex: 0 0 auto;">
                        <div style="cursor: pointer;" @click="router.push('/history')">
                            <p v-if="!checkSize" :style="{
                                fontWeight: '600',
                                color: '#000',
                                marginLeft: checkSize ? '0' : '25%'
                                }" >Notification</p>
                            <img v-else v-lazy="'/src/assets/notification.svg'" alt="VeeTop notification icon" style="width: 1.7em;height: 1.7em;" @click="router.push('/history')">
                        </div>
                    </li>
                    <li class="nav-item lli" style="display: flex;justify-content: space-around;align-items: center; width: 25vw !important;height: 100%;">
                        <div style="display: flex;justify-content: center;align-items: center;height: 100%;" >
                            <span v-if="checkSize" @click="router.push('/profile')" style="cursor: pointer;">
                                <div>
                                    <img v-lazy="'/src/assets/profile.svg'" alt="VeeTop profile icon" style="width: 1.5em;height: 1.5em;box-sizing: border-box;">
                                </div>
                                <div style="display: flex;justify-content: center;align-items: center;text-align: left;">
                                    <span style="color: #000;font-weight: 600;">{{ username }}</span>
                                </div>
                            </span>
                            <p v-else style="font-weight: 600;color: #000;" @click="router.push('/profile')"> Profile</p>
                        </div>
                        <div>
                            <button class="p-2" style="border: 1px solid grey;color: #000;background-color: transparent;border-radius: 8px;font-weight: 700;font-size: 0.9em;">Logout</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>