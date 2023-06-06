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

    //Fetch Single Movie
    const { data: movie, error } = await useFetch(`/api/movies/${route.params.id}`);


    // Fetch Movie Trailer
    const { data: video } = await useFetch(`/api/movies/trailer/${route.params.id}`);

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