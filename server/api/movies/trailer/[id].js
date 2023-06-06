export default defineEventHandler(async(event) => {

    const {moviekey} = useRuntimeConfig()
    const movieid = event.context.params.id

    try {

        const  data = await $fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${moviekey}`)
        // console.log(data)
        return data 

    }catch (error) {
        console.error(error)
        return null
    }

})