<template>
     <div class="flex flex-col w-[250px] h-[400px] rounded-lg p-4 mb-8" :style="`background-image: url(https://image.tmdb.org/t/p/w300${posterPath})`"> 
        <div class="flex flex-col h-full p-1 py-4">
            <div class="flex-grow"></div>
            <div>
                <h3 class="font-semibold text-2xl mb-2 card-title text-white">
                    {{ name }}
                </h3>
                <p class="text-white font-bold text-md mb-2 px-2">
                    {{ date }}
                </p>
            </div>

            <div class="mt-4 p-2 text-right">
                <NuxtLink :to="`series/${series_id}`" class="bg-blue-600 hover:bg-sky-500 text-white
                font-medium py-2 px-4 rounded-full px-6 m-2">
                    Mehr Info
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

    defineProps(["series_id", "name", "date", "posterPath"])

</script>

<style scoped>

</style>