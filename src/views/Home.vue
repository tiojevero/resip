<script setup lang="ts">
import { Swiper, SwiperSlide, Navigation } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

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
</script>

<template>
    <div class="bg-gray-900 py-16 min-h-3/4 p-4">
        <div class="container mx-auto flex justify-center">
            <div>
                <h1 class="text-4xl text-white font-bold">
                    Find Your Favorite Food Recipe
                </h1>
                <div class="relative w-full py-3 mt-3 mx-auto">
                    <input
                        type="text"
                        class="w-full p-4 bg-white outline-none rounded-lg"
                        placeholder="Type your favorite food"
                    />
                    <button
                        class="bg-orange-500 text-white font-semibold px-4 py-3 absolute top-4 right-1 rounded-lg pointer hover:bg-orange-600"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto mt-5 p-4">
        <h2 class="text-xl font-semibold">Food Categories</h2>
        <!-- <swiper
            :slides-per-view="6"
            :space-between="50"
            :breakpoints="breakpoints"
            navigation
        >
            <swiper-slide v-for="i in 8" :key="i">
                <router-link
                    to="/"
                    class="block w-full shadow-md hover:shadow-lg pointer border-gray-200 rounded-xl p-7 text-center my-4"
                >
                    <img
                        src="https://www.themealdb.com/images/ingredients/Chicken.png"
                        class="w-full"
                    />
                    <h5 class="font-semibold">Chicken</h5>
                </router-link>
            </swiper-slide>
        </swiper> -->
        <div
            class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-between mt-3"
        >
            <div class="w-full md:w-fit p-2" v-for="i in 14" :key="i">
                <router-link
                    to="/"
                    class="block md:flex shadow-md hover:shadow-lg pointer border-gray-200 rounded-xl px-1 md:px-7 py-3 text-center"
                >
                    <img
                        src="https://www.themealdb.com/images/ingredients/Chicken.png"
                        class="h-10 md:h-14 mx-auto"
                    />
                    <h5 class="self-center font-semibold md:ml-2">Chicken</h5>
                </router-link>
            </div>
        </div>
    </div>
</template>
