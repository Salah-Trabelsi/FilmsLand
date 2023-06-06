export default defineEventHandler(async (event) => {
    const { moviekey } = useRuntimeConfig();
    const { searchSerie } = getQuery(event);
  
    try {
      const response = await $fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${moviekey}&language=en-US&query=${searchSerie}&page=1&include_adult=false`
      );
  
      // console.log("API Response:", response);
  
      return response.results || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });
  