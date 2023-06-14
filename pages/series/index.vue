<template>
  <div>
    <SearchBarSerie @search-serie="searchSerie" :searchError="searchError" />
    <div class="flex-wrap flex justify-center gap-3">
      <div v-for="serie in series" :key="serie.id">
        <SerieCard 
          :series_id="serie.id"
          :name="serie.name"
          :date="serie.first_air_date"
          :posterPath="serie.poster_path"
        />
      </div>
    </div>
  </div>
</template>


<script setup>



const series = ref([]);


onMounted(async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=0878a4c3be58867711cb8ee6283330bf');
    const data = await response.json();
    series.value = data.results;
  } catch (error) {
    console.error(error);
  }
});
  


    const moviekey = "0878a4c3be58867711cb8ee6283330bf";

    //Search Serie
    const searchError = ref(false);

    const searchSerie = async (searchInputSerie) => {
      if (searchInputSerie === "") {
        searchError.value = true;
        series.value = [];
      } else if (searchInputSerie !== "") {
        searchError.value = false;
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/tv?api_key=${moviekey}&language=en-US&query=${encodeURIComponent(
              searchInputSerie
            )}&page=1&include_adult=false`
          );
          const data = await response.json();
          series.value = data.results;
        } catch (error) {
          console.error(error);
        }
      }
    };

useHead({

  title:'FilmsLand | Series', 
  meta:[
      {
          name:'description', content:'Die Serienseite auf unserer Website präsentiert eine kuratierte Auswahl von 20 beliebten und neuen TV-Serien. Tauchen Sie ein in fesselnde Handlungsstränge, faszinierende Charaktere und süchtig machende Handlungswechsel, während Sie eine Vielzahl von Genres erkunden, darunter Drama, Mystery, Science-Fiction, Komödie und mehr. Bleiben Sie über die neuesten Trends im Fernsehen auf dem Laufenden und begeben Sie sich mit unserer Sammlung von Must-Watch-Serien auf eine spannende Binge-Watching-Reise.'
      }
  ]
})



</script>

<style scoped>

</style>