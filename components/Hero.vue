<template>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4">

        <div v-if="isSeriePage" class="h-500 rounded-lg overflow-hidden m-4 px-2 colres">
            <img class="rounded-lg" src="/peakyBlinders.jpg" alt="">
            <div class="p-abosulte mt-4 p-2 text-right">
                <NuxtLink :to="`series/60574`" class="bg-blue-600 hover:bg-sky-500 text-white
                font-medium py-2 px-4 rounded-full px-6 m-2">
                    Mehr Info
                </NuxtLink>
            </div>
        </div>

        <div v-else class="h-500 rounded-lg overflow-hidden m-4 px-2 colres">
            <img class="rounded-lg" src="/BlackAdam.png" alt="">
            <div class="p-abosulte mt-4 p-2 text-right">
                <div class="flex-grow"></div>
                <NuxtLink :to="`movies/436270`" class="bg-blue-600 hover:bg-sky-500 text-white
                font-medium py-2 px-4 rounded-full px-6 m-2">
                    Mehr Info
                </NuxtLink>
            </div>
        </div>
        
        <div v-if="isSeriePage" class="h-500 rounded-lg overflow-hidden m-4 px-2 colres">
            <img class="rounded-lg" src="/You.png" alt="">
            <div class="p-abosulte mt-4 p-2 text-right">
                <NuxtLink :to="`series/78191`" class="bg-blue-600 hover:bg-sky-500 text-white
                font-medium py-2 px-4 rounded-full px-6 m-2">
                    Mehr Info
                </NuxtLink>
            </div>
        </div>


        <div v-else class="h-500 rounded-lg overflow-hidden m-4 px-2 colres">
            <img class="rounded-lg" src="/megan.png" alt="">
            <div class="p-abosulte mt-4 p-2 text-right">
                <NuxtLink :to="`movies/536554`" class="bg-blue-600 hover:bg-sky-500 text-white
                font-medium py-2 px-4 rounded-full px-6 m-2">
                    Mehr Info
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

const route = useRoute();
const isSeriePage = ref(route.path === '/series');

watch(() => route.path, (newValue, oldValue) => {
  isSeriePage.value = newValue === '/series';
});

</script>

<style scoped>

.h-500 {

    height: 500px;
}

.colres{

    position: relative;
    width: 100%;
}

.colres img {

    height: 100%;
    width: 100%;
    object-fit: cover;
}

.p-abosulte {

    position: absolute;
    margin-top: -73px;
    right: 0;
    margin-right: 3rem;
}


@media only screen and (max-width: 960px) {
    .colres {
        height: auto !important;
        width: auto !important;
    }
}


</style>