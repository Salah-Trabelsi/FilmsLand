<template>
    <div>
        <MovieDetail 
        :title="movie.title" 
        :date="movie.release_date" 
        :poster="movie.poster_path" 
        :overview="movie.overview" 
        :vote_average="movie.vote_average"
        :trailer="trailer" 
      
 />
    </div>
</template>

<script setup>
definePageMeta({
    layout:'custom',
});
    const route = useRoute();
    const movieId = ref(route.params.id);
    const moviekey = ref('0878a4c3be58867711cb8ee6283330bf');

    //Fetch Single Movie
    const { data: movie, error } = await useFetch(`https://api.themoviedb.org/3/movie/${movieId.value}?api_key=${moviekey.value}&language=de-DE`);


    // Fetch Movie Trailer
    const { data: video } = await useFetch(`https://api.themoviedb.org/3/movie/${movieId.value}/videos?api_key=${moviekey.value}`);

    const allvideo = toRaw(video.value.results)

    const trailer = computed(() => {
    let trailer = null;

        for (let i = 0; i < allvideo.length; i++) {
            if (allvideo[i].type === "Trailer") {
            trailer = allvideo[i].key;
            break;
            }
        }

        return trailer;
    });


    const pageTitle = computed(() => {
        return movie.value ? `FilmsLand | ${movie.value.title}` : 'FilmsLand';
    });

    const pageDescription = computed(() => {
        return movie.value ? movie.value.overview : 'Default description for FilmsLand';
    });

    useHead({

    title: pageTitle.value,
    meta:[
        {
            name: 'description',
            content: pageDescription.value,
        }
        ]
    })





</script>

<style scoped>



</style>