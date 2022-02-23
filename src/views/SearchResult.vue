<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard.vue";

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
        <h1 class="font-semibold my-3">
            Search result for "{{ activeRoute }}"
        </h1>
        <RecipeCard :data="data" />
    </div>
</template>
