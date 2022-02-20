<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import useFetch from "../hooks/useFetch";

const route = useRoute();
const activeRoute = route.params.id;
const { data, fetchData } = useFetch(`filter.php?c=${activeRoute}`);

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="font-semibold mt-3">Category: {{ activeRoute }}</h1>
        <div
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5"
            v-if="data"
        >
            <div
                class="p-3 rounded-2xl shadow-lg"
                v-for="meal in data.meals"
                :key="meal.idMeal"
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
            </div>
        </div>
    </div>
</template>
