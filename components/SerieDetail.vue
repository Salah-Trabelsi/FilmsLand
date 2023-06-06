<template>
    <div class="grid sm:grid-cols-3 gap-7 justify-items-center m-10">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img class="h-400 w-full object-cover"
            :src="`https://image.tmdb.org/t/p/w300/` + poster" 
             alt="Image Poster">
        </div>
        <div class="sm:col-span-2 mx-auto">
            <h1 class="font-bold text-2xl mb-5 righteoustitle">{{name}}</h1>
            <h3 class="font-semibold text-lg mb-5">Release Date: {{ date }}</h3>
            <p class="text-gray-400 text-md mb-8">
                {{overview}}
            </p>
            <p class="mb-4">Vote: <span :class="getVoteClass(vote_average)"> {{ vote_average }}</span></p>
            <div class="mt-6">
                <NuxtLink :to="`https://www.youtube.com/watch?v=${trailer}`"
                target="_blank"
                class="bg-blue-600 hover:bg-indigo-600 text-white
                font-medium py-2 px-4 rounded">
                    watch Trailer
                </Nuxtlink>
            </div>
        </div>

    </div>
</template>

<script setup>
 import { getVoteClass } from '~/mixins/voteMixin';
 const voteClass = getVoteClass();


 defineProps(["series_id","name", "date", "poster","overview", "vote_average", "trailer"])

   

</script>

<style scoped>

</style>