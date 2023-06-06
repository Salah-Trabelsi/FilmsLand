export default defineEventHandler(async(event) => {

    const {moviekey} = useRuntimeConfig()
    const movieid = event.context.params.id

    try {

        const  data = await $fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${moviekey}&language=de-DE`)
        // console.log(data)
        return data 

    }catch (error) {
        console.error(error)
        return null
    }

})