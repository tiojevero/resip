<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
    <div class="bg-black shadow-lg w-full p-4">
        <div class="container mx-auto flex justify-between">
            <span class="text-white font-bold text-lg bg-whiteb"
                ><span class="text-orange-500">Re</span>Sip 👍</span
            >
            <nav>
                <router-link to="/" class="text-orange-500 font-semibold mr-4"
                    >Home</router-link
                >
                <router-link to="/" class="text-white">About Us</router-link>
            </nav>
        </div>
    </div>
</template>
