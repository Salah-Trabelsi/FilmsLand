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
                { rel: 'icon', href: '/favicon.png' } // Replace with the path to your favicon file
              ],
            title: 'FilmsLand',

            meta: [
                {name: 'description', content:'Entdecken Sie in unserem Online-Shop eine große Auswahl an trendiger und modischer Herren- und Damenbekleidung. Entdecken Sie die neuesten Stile, von lässig bis formell, und kaufen Sie mit Zuversicht hochwertige Produkte ein, die die Essenz zeitgenössischer Mode einfangen'},
                {name: 'keywords', content:'movies ,Series, news Movies and series'},
                {name:'author', content:'Salah Trabelsi'}
            ]
        }
    }

})
