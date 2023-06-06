export default defineEventHandler(async(event) => {

    const {moviekey} = useRuntimeConfig()
    const { searchMovie } = getQuery(event)

    try {

        const  data = await $fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=${moviekey}&language=en-US&query=${searchMovie}&page=1&include_adult=false`)
        // console.log(data)
        return data 

    }catch (error) {
        console.error(error)
        return null
    }

})