<template>
  <Layout>
    <section id="ueberuns-hero" class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-warning">
            Über uns
          </h1>
          <h2 class="subtitle has-text-light">
            Die integrative Kindertagesstätte der Gemeinde Oerel
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="tabs is-centered is-boxed">
        <ul>
          <li class="item is-active">
            <g-link to="/unser-haus/">
              <span class="icon is-small has-text-info"><i class="fas fa-school"></i></span>
              <span>Unser Haus</span>
            </g-link>
          </li>
          <li class="item">
            <g-link to="/team/">
              <span class="icon is-small has-text-success"><i class="fas fa-users"></i></span>
              <span>Unser Team</span>
            </g-link>
          </li>
          <li class="item">
            <g-link to="/stellen/">
              <span class="icon is-small has-text-danger"><i class="fas fa-briefcase"></i></span>
              <span>Stellen</span>
            </g-link>
          </li>
          <li class="item">
            <g-link to="/eltern/">
              <span class="icon is-small has-text-warning"><i class="fas fa-user-friends"></i></span>
              <span>Eltern</span>
            </g-link>
          </li>
          <li class="item">
            <g-link href="/galerie/">
              <span class="icon is-small has-text-success"><i class="fas fa-images"></i></span>
              <span>Fotogalerie</span>
            </g-link>
          </li>
        </ul>
      </div>
      <section class="section">
        <div class="container">
          <h3 class="title is-size-4">Unser Haus</h3>
          <p class="content">Die Kindertagesstätte soll ein Ort sein für Kinder und Mitarbeiter, auch für Kinder der Mitarbeiter, für Eltern und alle Gemeindemitglieder. Jeder wird als eigenständiger Mensch wahrgenommen und angenommen. Für die Kindertagesstätte zeigt sich Qualität vor allem im positiven Umgang miteinander. Zum Wohle der Kinder soll die Bereitschaft aller zum verantwortlichen Miteinander vorhanden sein. Die Mitarbeiter/innen sind für den Umgang mit den Kindern besonders ausgebildet. Wir werden Ihrem Kind immer freundlich, liebevoll, verständnisvoll und mit Achtsamkeit begegnen.</p>
          <hr class="is-large">
          <div class="columns is-multiline">
            <div class="column is-full is-one-quarter-desktop">
              <p class="title is-size-5">Machen Sie sich ein Bild</p>
              <p class="content">In Haus 1 befindet sich die Krippe für Kinder ab der 9. Lebenswoche bis 3 Jahren. In den Häusern 2 und 3 werden Kinder bis zum Schulbeginn betreut. Unsere Räume sollen Geborgenheit und angenehme Atmosphäre ausstrahlen. Sie bieten Bewegungsfreiheit, Nischen und unterschiedliche Spielbereiche. Viel Platz zum Strampeln, Rollen, Schieben, Krabbeln, Laufen, Erkunden und Experimentieren. Sandkiste, Rutsche, Nestschaukel, Kletternetz, Wasserpumpe, Spielhügel, Spielpferde und Fahrzeuge bieten viele Möglichkeiten zum geschützten Spiel im Freien.</p>
            </div>
            <div class="column is-full is-three-quarters-desktop">
              <Gallery :photos="photos"></Gallery>
            </div>
          </div>
        </div>
      </section>
    </section>
  </Layout>
</template>

<page-query>
  query {
    allAboutPhotos(order: ASC) {
      edges {
        node {
          path
        }
      }
    }
  }
</page-query>

<script>
import Gallery from '../components/Gallery.vue'
export default {
  components: {
    Gallery
  },
  metaInfo: {
    title: 'Unser Haus'
  },
  data() {
    return {
      photos: []
    }
  },
  mounted() {
    this.$page.allAboutPhotos.edges.forEach(edge => {
      this.photos.push(edge.node.path)
    })
  }
}
</script>

<style scoped>
  #ueberuns-hero {
    background-image: linear-gradient(to bottom left,
    rgba(39, 61, 92, 0.2),
    rgba(39, 61, 92, 0.8)),
    url('../assets/images/fingerpuppen.jpg');
    background-position: center;
    background-size: cover;
  }
</style>