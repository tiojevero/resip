<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import useFetch from "../hooks/useFetch";

const { data, fetchData } = useFetch("categories.php");
const router = useRouter();

const search = ref<string>("");

function searchRecipe() {
    router.push(`/search/${search.value}`);
}

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div
        class="bg-cover bg-[url('https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')] h-[calc(100vh-60px)] flex"
    >
        <div class="flex h-full w-full bg-gradient-to-t from-black">
            <div
                class="container mx-auto flex justify-center self-center h-fit p-4"
            >
                <div>
                    <h1 class="text-4xl lg:text-5xl text-white font-bold mb-5">
                        Find Your Favorite Food Recipe
                    </h1>
                    <div class="relative w-full py-3 mt-3 mx-auto">
                        <input
                            type="text"
                            class="w-full p-4 bg-white outline-none rounded-xl"
                            placeholder="Type your favorite food"
                            v-model="search"
                            @keyup.enter="searchRecipe"
                        />
                        <button
                            class="bg-orange-500 text-white font-semibold px-4 py-3 absolute top-4 right-1 rounded-lg pointer hover:bg-orange-600"
                            @click="searchRecipe"
                        >
                            Search
                        </button>
                    </div>
                    <h2 class="text-white text-lg font-semibold mt-3">
                        Popular Categories
                    </h2>
                    <div
                        class="w-full grid grid-cols-2 md:grid-cols-6 gap-2 mt-2"
                        v-if="data"
                    >
                        <router-link
                            :to="`/category/${category.strCategory}`"
                            v-for="category in data.categories"
                            :key="category.idCategory"
                            class="bg-white/[.1] hover:bg-white/[.2] backdrop-blur-lg text-white text-center font-semibold px-3 py-1 rounded"
                        >
                            {{ category.strCategory }}
                        </router-link>
                    </div>
                    <p class="text-white" v-else>Loading...</p>
                </div>
            </div>
        </div>
    </div>
</template>
