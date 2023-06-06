<template>
    <div>
        <SearchBar @search-movie="searchMovie" 
        :searchError="searchError"/>
        <div>
            <label>Filter by Genre:</label>
            <div class="genre-buttons text-center mb-10">
                <button class="bg-blue-600 hover:bg-sky-500 text-white
                    font-medium py-2 px-4 rounded-full px-6 m-2 focus:bg-orange-500" 
                    @click="selectGenre('')">All Genres
                </button>
                <button class="bg-blue-600 hover:bg-sky-500 text-white
                font-medium py-2 px-4 rounded-full px-6 m-2 focus:bg-orange-500"
                v-for="(genre, index) in genres.slice(0, 9)"
                :key="genre.id"
                @click="selectGenre(genre.id)"
                :class="{ active: selectedGenre === genre.id }"
                >
                {{ genre.name }}
                </button>
            </div>
        </div>
        <div  class="flex-wrap flex justify-center gap-3">
        <div v-for="movie in filteredMovies" :key="movie.id">
            <MovieCard 
            :movieid="movie.id"
            :title="movie.title" 
            :date="getReleaseYear(movie.release_date)" 
            :poster="movie.poster_path" 
            
            />   
        </div>
          
        </div>
    </div>
</template>

<script setup>

    const movies = ref([]);

    const selectedGenre = ref("");
    let genres = ref([]);
    

    //Search Movie
    const searchError = ref(false); 

    const searchMovie = async(searchInput) => {

        if(searchInput === "") {

            searchError.value = true;
        }

        if(searchInput !== "") {

            searchError.value = false;
            const { data, error } = await useFetch(`/api/movies/search?searchMovie=${searchInput}`);
            movies.value = data.value
        }
    };

        //Fetch All Movie
        const { data, error } = await useFetch("/api/movies");

        movies.value = data.value;


        //Fetch genre Movie
        const apikey="0878a4c3be58867711cb8ee6283330bf";
        const { data: genresData } = await useFetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`);
         genres = ref(genresData.value.genres);

         // Select Genre
        const selectGenre = (genreId) => {
            selectedGenre.value = genreId;
        };

        // Computed property to filter movies based on selected genre
        const filteredMovies = computed(() => {
        if (selectedGenre.value === '') {
            return movies.value.results;
        } else {
            return movies.value.results.filter((movie) => movie.genre_ids.includes(selectedGenre.value));
        }
        });

    
    // Get the year from the release date
    const getReleaseYear = (releaseDate) => {
        const date = new Date(releaseDate);
        return date.getFullYear();
    };


useHead({

    title:'FilmsLand | Movies', 
    meta:[
        {
            name:'description', content:'Auf der Filmseite unserer Website finden Sie eine Sammlung von 20 neuen Filmen. Entdecken Sie die neuesten Veröffentlichungen und entdecken Sie eine Vielzahl von Genres, darunter Action, Comedy, Drama, Liebesromane und mehr. Tauchen Sie ein in fesselnde Handlungsstränge, außergewöhnliche Darbietungen und atemberaubende Bilder. Bleiben Sie über die neuesten Trends im Kino auf dem Laufenden und gönnen Sie sich ein unvergessliches Filmerlebnis.'
        }
    ]
})


</script>

<style scoped>

</style>