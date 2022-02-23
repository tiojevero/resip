<template>
    <div class="h-[calc(100vh-80px)] flex justify-center px-4">
        <div class="self-center text-center">
            <img src="../assets/404.svg" alt="page not found" class="w-full" />
            <h1 class="text-3xl font-bold text-gray-900">
                Sorry, this page flew to the moon!
            </h1>
            <p class="text-gray-700 mt-3">
                Perhaps you would like to go to our
                <router-link to="/" class="text-orange-500 font-medium"
                    >Home Page ?</router-link
                >
            </p>
        </div>
    </div>
</template>
