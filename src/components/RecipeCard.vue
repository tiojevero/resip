<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    data: Object,
});
</script>

<template>
    <div v-if="data">
        <div
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5"
            v-if="data.meals"
        >
            <router-link
                class="p-3 rounded-2xl shadow-lg"
                v-for="meal in data.meals"
                :key="meal.idMeal"
                :to="`/recipe/${meal.idMeal}`"
            >
                <div
                    class="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                >
                    <img
                        :src="meal.strMealThumb"
                        :alt="meal.strMealThumb"
                        loading="lazy"
                    />
                </div>
                <h5 class="font-semibold line-clamp-2 mt-2 mb-4">
                    {{ meal.strMeal }}
                </h5>
            </router-link>
        </div>
        <p v-else>Sorry, i can't find your favourite foods ☹</p>
    </div>
    <p v-else>Loading...</p>
</template>
