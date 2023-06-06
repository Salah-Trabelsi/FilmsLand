export default defineEventHandler(async () => {
    const { moviekey } = useRuntimeConfig();
    const totalPages = 4; 

  
    try {
      let movies = [];
  
      for (let page = 1; page <= totalPages; page++) {
        const data = await $fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${moviekey}&page=${page}`);
        movies = movies.concat(data.results);
      }
  
      return { results: movies };
    } catch (error) {
      console.error(error);
      return null;
    }
  });
  