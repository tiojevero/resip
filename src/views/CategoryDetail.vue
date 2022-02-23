<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard.vue";

const route = useRoute();
const activeRoute = route.params.name;
const { data, fetchData } = useFetch();

onMounted(() => {
    fetchData(`filter.php?c=${activeRoute}`);
});
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="font-semibold my-3">Category: {{ activeRoute }}</h1>
        <RecipeCard :data="data" />
    </div>
</template>
