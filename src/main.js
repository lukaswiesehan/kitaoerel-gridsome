// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import '~/assets/fontawesome/css/all.min.css'
import VueCarousel from 'vue-carousel/src/index'

export default function (Vue, { router, head, isClient }) { 
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueScrollTo, {
    offset: -150
  })
  head.meta.push({key: 'description', name: 'description', content: 'Die integrative Kindertagesstätte der Gemeinde Oerel. Ein Einblick in unsere Einrichtung + aktuelle Informationen, Termine und Formulare zum Download.'})
  head.meta.push({name: 'keywords', content: 'Kinder,Kita,Kindergarten,Kindertagesstätte,Oerel,Geestequelle'})
}
