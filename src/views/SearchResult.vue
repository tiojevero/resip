<script setup lang="ts">
import { nextTick, watch, ref, onBeforeUpdate } from "vue";
import { useRoute, onAfterRouteUpdate } from "vue-router";
import { onMounted } from "vue";
import useFetch from "../hooks/useFetch";

const route = useRoute();
const activeRoute = ref(route.params.name);

const { data, fetchData } = useFetch(`search.php?s=${activeRoute.value}`);

watch(
    () => route.params.name,
    (newValue) => {
        activeRoute.value = newValue;
        fetchData();
    }
);

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="font-semibold mt-3">
            Search result for "{{ activeRoute }}"
        </h1>
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
        <p v-else>Loading...</p>
    </div>
</template>
