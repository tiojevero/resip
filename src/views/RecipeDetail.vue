<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useFetch from "../hooks/useFetch";

const route = useRoute();
const router = useRouter();
const { data, fetchData } = useFetch();

const ingredients = ref<string[]>([]);

function createIngredientsArray(recipe: any) {
    for (let i = 1; i <= 20; i++) {
        if (recipe[`strIngredient${i}`]) {
            const strIngredient: any = {
                name: `${recipe[`strIngredient${i}`]}`,
                measure: `${recipe[`strMeasure${i}`]}`,
            };
            ingredients.value.push(strIngredient);
        }
    }
}

onMounted(() => {
    fetchData(`lookup.php?i=${route.params.id}`);
});

watch(
    () => data,
    (recipe) => createIngredientsArray(recipe.value.meals[0]),
    { deep: true }
);
</script>

<template>
    <div class="container mx-auto p-4 mt-5">
        <button
            class="font-semibold mb-4 hover:bg-gray-100 rounded px-3"
            @click="router.go(-1)"
        >
            &lt; Back
        </button>
        <div class="grid grid-cols-1 lg:grid-cols-3" v-if="data">
            <img
                :src="data.meals[0].strMealThumb"
                alt="food image"
                class="rounded-xl col-span-1"
            />
            <div class="lg:ml-12 col-span-2">
                <h1 class="text-4xl mt-4 font-bold">
                    {{ data.meals[0].strMeal }}
                </h1>
                <h2 class="text-xl font-semibold mt-5 mb-2">Ingredients</h2>
                <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    <div
                        class="shadow-md rounded-lg px-5 py-3 text-left"
                        v-for="(ingredient, index) in ingredients"
                        :key="index"
                    >
                        <p class="font-semibold capitalize">
                            {{ ingredient.name }}
                        </p>
                        <span class="text-sm text-gray-500">{{
                            ingredient.measure
                        }}</span>
                    </div>
                </div>
                <h2 class="text-xl font-semibold mt-5 mb-2">Instructions</h2>
                <p>
                    {{ data.meals[0].strInstructions }}
                </p>
            </div>
        </div>
        <div class="mt-3" v-else>Loading...</div>
    </div>
</template>
