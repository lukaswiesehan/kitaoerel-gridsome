// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueCarousel from 'vue-carousel'
import '~/assets/fontawesome/css/all.min.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueScrollTo, {
    offset: -150
  })
  Vue.use(VueCarousel)
  head.meta.push({key: 'description', name: 'description', content: 'Die integrative Kindertagesstätte der Gemeinde Oerel. Das Zusammenspiel von schöner und ruhiger Lage im Grünen, einem verantwortungsvollen Träger, großzügigen Betreuungszeiten und einem hoch qualifizierten Team zeichnet die Kindertagesstätte Oerel aus.'})
  head.meta.push({name: 'keywords', content: 'Kinder,Kita,Kindergarten,Kindertagesstätte,Oerel,Geestequelle'})
}
