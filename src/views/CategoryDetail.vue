<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import useFetch from "../hooks/useFetch";

const route = useRoute();
const activeRoute = route.params.name;
const { data, fetchData } = useFetch();

onMounted(() => {
    fetchData(`filter.php?c=${activeRoute}`);
});
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="font-semibold mt-3">Category: {{ activeRoute }}</h1>
        <div
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5"
            v-if="data"
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
                        lazy
                    />
                </div>
                <h5 class="font-semibold line-clamp-2 mt-2 mb-4">
                    {{ meal.strMeal }}
                </h5>
            </router-link>
        </div>
        <p v-else>Loading...</p>
    </div>
</template>
