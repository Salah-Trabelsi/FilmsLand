export default defineEventHandler(async (event) => {
  const { moviekey } = useRuntimeConfig();
  const serieId = event.context.params.id;

  try {
    const data = await $fetch(
      `https://api.themoviedb.org/3/tv/${serieId}/videos?api_key=${moviekey}&language=en-US`
    );
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
});
