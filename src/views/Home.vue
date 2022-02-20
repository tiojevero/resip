<script setup lang="ts">
import { onMounted } from "vue";
import useFetch from "../hooks/useFetch";

const breakpoints = {
    320: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    720: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    1020: {
        slidesPerView: 7.5,
        spaceBetween: 20,
    },
};

const { data, fetchData } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
);

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div
        class="bg-cover bg-[url('https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')] h-[calc(100vh-60px)] flex"
    >
        <div class="flex h-full w-full bg-gradient-to-t from-black" v-if="data">
            <div
                class="container mx-auto flex justify-center self-center h-fit p-4"
            >
                <div>
                    <h1 class="text-5xl text-white font-bold mb-5">
                        Find Your Favorite Food Recipe
                    </h1>
                    <div class="relative w-full py-3 mt-3 mx-auto">
                        <input
                            type="text"
                            class="w-full p-4 bg-white outline-none rounded-xl"
                            placeholder="Type your favorite food"
                        />
                        <button
                            class="bg-orange-500 text-white font-semibold px-4 py-3 absolute top-4 right-1 rounded-lg pointer hover:bg-orange-600"
                        >
                            Search
                        </button>
                    </div>
                    <h5 class="text-white text-lg font-semibold mt-3">
                        Popular Categories
                    </h5>
                    <div
                        class="w-full grid grid-cols-2 md:grid-cols-6 gap-2 mt-2"
                    >
                        <div
                            v-for="category in data.categories"
                            :key="category.idCategory"
                            class="bg-white/[.1] backdrop-blur-lg text-white text-center font-semibold px-3 py-1 rounded"
                        >
                            {{ category.strCategory }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
