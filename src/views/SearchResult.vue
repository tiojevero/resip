<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import useFetch from "../hooks/useFetch";

const route = useRoute();
const activeRoute = ref<string | string[]>(route.params.name);

const { data, fetchData } = useFetch();

watch(
    () => route.params.name,
    (newValue) => {
        activeRoute.value = newValue;
        fetchData(`search.php?s=${activeRoute.value}`);
    }
);

onMounted(() => {
    fetchData(`search.php?s=${activeRoute.value}`);
});
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="font-semibold mt-3">
            Search result for "{{ activeRoute }}"
        </h1>
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
            <p v-else>Sorry, i can't find your favorite foods ☹</p>
        </div>
        <p v-else>Loading...</p>
    </div>
</template>
