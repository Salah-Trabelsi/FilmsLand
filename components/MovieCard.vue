<template>
    <div class="bg-cyan-50 flex flex-col w-[250px] h-[400px] rounded-lg p-4 mb-8" :style="`background-image: url(https://image.tmdb.org/t/p/w300/${poster})`">
        <div class="flex flex-col h-full p-1 py-4">
            <div class="flex-grow"></div>
            <div>
                <h3 class="font-semibold text-2xl mb-2 card-title text-white">
                    {{ title }}
                </h3>
                <p class="text-white font-bold text-md mb-2 px-2">
                    {{date}}
                </p>
            </div>

            <div class="mt-4 p-2 text-right">
                <NuxtLink :to="`movies/${movieid}`" class="bg-blue-600 hover:bg-sky-500 text-white
                font-medium py-2 px-4 rounded-full px-6 m-2">
                    Mehr Info
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(["movieid", "title", "date", "poster"])
 
</script>

<style scoped>
    .h-400 {
        height: 455px;
    }

    .w-300 {
        width: 300px;
    }

    .bg-cyan-50 {
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>