<script setup lang="ts">
    defineProps<{
        amount:number,
        bundle:string,
        days: string,
        plan: string
;   }>();
</script>
<template>
    <li class="list-group-item p-2 mb-2" style="border-radius: 10px;border: 0.8px lightgrey solid; min-width: 80%;display: flex;justify-content: space-between;align-items: center;flex-direction: row;cursor: pointer;">
        <div>
            <h4 style="font-size: 1.2em;font-weight: 650;">{{ plan }}</h4>
            <p style="color: grey;text-align: left;font-size: 0.9em;font-weight: 500;width: 100%;">{{ bundle }} for {{days}}</p>
        </div>
        <div style="font-weight: 700;font-size: 1.2em;">
            ₦{{ amount }}
        </div>
    </li>
</template>