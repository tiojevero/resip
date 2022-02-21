<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const search = ref<string>("");

function searchRecipe() {
    router.push(`/search/${search.value}`);
}
</script>

<template>
    <div class="bg-black shadow-lg w-full p-4">
        <div class="container mx-auto flex justify-between">
            <router-link to="/" class="text-white font-bold text-lg self-center"
                ><span class="text-orange-500">Re</span>Sip👍</router-link
            >
            <div class="relative w-1/3 py-1 mx-5" v-if="route.path !== '/'">
                <input
                    type="text"
                    class="w-full p-2 bg-white outline-none rounded-lg"
                    placeholder="Type your favorite food"
                    v-model="search"
                    @keyup.enter="searchRecipe"
                />
                <button
                    class="bg-orange-500 text-white font-semibold px-2 py-1 absolute top-2 right-1 rounded-lg pointer hover:bg-orange-600"
                    @click="searchRecipe"
                >
                    Search
                </button>
            </div>
            <nav class="self-center">
                <router-link to="/" class="text-orange-500 font-semibold mr-4"
                    >Home</router-link
                >
            </nav>
        </div>
    </div>
</template>
