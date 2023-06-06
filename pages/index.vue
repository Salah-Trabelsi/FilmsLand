<template>
    <div>
      <SearchBar @search-movie="searchMovie" :searchError="searchError" />
      <h1 v-if="!isSearching" class="text-3xl text-white mb-8 ml-10">Trending Now</h1>
        <div class="flex-wrap flex justify-center gap-3">
            <div v-if="!isSearching && trendingMovies?.results?.length" v-for="movie in trendingMovies.results.slice(0, 6)" :key="movie.id">
            <MovieCard 
            :movieid="movie.id" 
            :title="movie.title" 
            :date="getReleaseYear(movie.release_date)" 
            :poster="movie.poster_path" />
            </div>
        </div>
        <h1 v-if="!isSearching" class="text-3xl text-white mb-8 ml-10">Popular Movies</h1>
        <div class="flex-wrap flex justify-center gap-3">
            <div v-if="!isSearching && popularMovies?.results?.length" v-for="movie in popularMovies.results.sort((a, b) => b.popularity - a.popularity).slice(-6)" :key="movie.id">
            <MovieCard 
            :movieid="movie.id" 
            :title="movie.title" 
            :date="getReleaseYear(movie.release_date)" 
            :poster="movie.poster_path" />
            </div>
        </div>

        <h1 v-if="!isSearching" class="text-3xl text-white mb-8 ml-10">Popular Serie</h1>
        <div class="flex-wrap flex justify-center gap-3">
            <div v-if="!isSearching && popularSerie?.results?.length" v-for="serie in popularSerie.results.slice(0,6)" :key="serie.id">
                <SerieCard 
                :series_id="serie.id"
                :name="serie.name"
                :date="serie.first_air_date"
                :posterPath="serie.poster_path"
                />
            </div>
        </div>
        <div class="flex-wrap flex justify-center gap-3">
            <div v-if="isSearching && movies?.results?.length" v-for="movie in movies.results" :key="movie.id">
            <MovieCard 
            :movieid="movie.id" 
            :title="movie.title" 
            :date="getReleaseYear(movie.release_date)" 
            :poster="movie.poster_path" />
            </div>
        </div>

      </div>
  
  </template>

<script setup>

    const movies = ref([]);
    const trendingMovies = ref([]);
    const popularMovies = ref([]); 
    const isSearching = ref(false)

    //Search Movie
    const searchError = ref(false); 

    const searchMovie = async(searchInput) => {
        if(searchInput === "") {

            searchError.value = true;
            isSearching.value = false;
            movies.value = [];
        }

        if(searchInput !== "") {

            searchError.value = false;
            isSearching.value = true;
            const { data, error } = await useFetch(`/api/movies/search?searchMovie=${searchInput}`);
            movies.value = data.value
        }
    };
    const Apikey = "0878a4c3be58867711cb8ee6283330bf";
    //Fetch trending Movie
    const { data: trendingData, error: trendingError  } = await useFetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${Apikey}&language=de-De&page=1`);
    trendingMovies.value = trendingData?.value || {};

      // Fetch Popular Movies
    const { data: popularData, error: popularError } = await useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=de-De&page=1`);
    popularMovies.value = popularData?.value || {};

    // Fetch PopularSerie

    const {data: popularSerie, error: popularSerieError } = await useFetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${Apikey}&language=de-De&page=1`)

    popularSerie.value = popularSerie?.value  || {};
  
    // Get the year from the release date
    const getReleaseYear = (releaseDate) => {
    const date = new Date(releaseDate);
    return date.getFullYear();

    
};





</script>

<style scoped>

</style>