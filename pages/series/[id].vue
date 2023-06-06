<template>
    <div>
       <SerieDetail :name="serie.name" 
       :series_id="serie.id"
       :date="serie.first_air_date"
       :poster="serie.poster_path"
       :vote_average="serie.vote_average"
       :overview="serie.overview"
       :trailer="serieTrailer"
       />
    </div>
</template>

<script setup>
definePageMeta({
    layout:'custom',
});

const route = useRoute();


const { data: serie, error } = await useFetch(`/api/series/${route.params.id}`);


const { data: serieVideo, error: serieVideoError } = await useFetch(`/api/series/trailer/${route.params.id}`);
  
  const allSerieVideos = toRaw(serieVideo.value.results);

  const serieTrailer = computed(() => {
    let trailer = null;

    for (let i = 0; i < allSerieVideos.length; i++) {
      if (allSerieVideos[i].type === "Trailer") {
        trailer = allSerieVideos[i].key;
        break;
      }
    }

    return trailer;
  });

    const pageTitle = computed(() => {
        return serie.value ? `FilmsLand | ${serie.value.name}` : 'FilmsLand';
    });

    const pageDescription = computed(() => {
        return serie.value ? serie.value.overview : 'Default description for FilmsLand';
    });



    useHead({
    title: pageTitle.value,
    meta:[
        {
            name:'description',
            content: pageDescription.value,
        }
        ]
    })


</script>

<style scoped>

</style>