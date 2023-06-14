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
const serieId = ref(route.params.id);
const moviekey = ref('0878a4c3be58867711cb8ee6283330bf');


const { data: serie, error } = await useFetch(`https://api.themoviedb.org/3/tv/${serieId.value}?api_key=${moviekey.value}&language=de-DE/`);


const { data: serieVideo, error: serieVideoError } = await useFetch(`https://api.themoviedb.org/3/tv/${serieId.value}/videos?api_key=${moviekey.value}&language=en-US`);
  
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