// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: ["@nuxtjs/tailwindcss"],


    runtimeConfig: {
       moviekey: process.env.MOVIE_API_KEY,
    },

    css: [
        '@/assets/main.css'
    ],

    app: {

        head: {
            link: [
                { rel: 'icon', href: '/favicon.png' } 
              ],
            title: 'FilmsLand',

            meta: [
                {name: 'description', content:'Im Filmsland können Sie eine kuratierte Auswahl beliebter Filme erkunden, darunter Blockbuster-Hits und von der Kritik gefeierte Filme. Darüber hinaus können Sie die neuesten Trendfilme entdecken, die in der Unterhaltungsbranche für Aufsehen sorgen. Egal, ob Sie ein Fan von Action, Romantik, Komödie oder einem anderen Genre sind, die Film-App hat für jeden etwas zu bieten'},
                {name: 'keywords', content:'movies ,Series, news Movies and series'},
                {name:'author', content:'Salah Trabelsi'}
            ]
        }
    }

})
