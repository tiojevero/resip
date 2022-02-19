<template>
    <div class="bg-gray-900 py-16 min-h-3/4 p-4">
        <div class="container mx-auto">
            <h1 class="text-4xl text-white font-bold">
                Find Your Favorite Food Recipe
            </h1>
            <div class="relative w-3/5 max-w-xl py-3 mt-3">
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
    <div class="container mx-auto mt-5">
        <h2 class="text-xl font-semibold">Food Categories</h2>
        <div class="flex gap-5 justify-between mt-3">
            <div
                class="shadow-md hover:shadow-lg pointer border-gray-200 rounded-xl p-7 text-center"
                v-for="i in 6"
                :key="i"
            >
                <img
                    src="https://www.themealdb.com/images/ingredients/Chicken.png"
                    class="w-50"
                />
                <h5 class="font-semibold">Chicken</h5>
            </div>
        </div>
    </div>
</template>
