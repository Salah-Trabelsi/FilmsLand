export default defineEventHandler(async() => {
    const {moviekey} = useRuntimeConfig()
    try {

        const  data = await $fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${moviekey}`)
        // console.log(data)
        return data 

    }catch (error) {
        console.error(error)
        return null
    }
 

})