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
          <li class="item">
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
          <li class="item is-active">
            <g-link to="/galerie/">
              <span class="icon is-small has-text-success"><i class="fas fa-images"></i></span>
              <span>Fotogalerie</span>
            </g-link>
          </li>
        </ul>
      </div>
      <section class="section">
        <div class="container">
          <h3 class="title is-size-4">Fotogalerie</h3>
          <p class="content">Hier stellen wir Ihnen Fotogalerien zur Verfügung, die einen Einblick in unseren Alltag und in besondere Tage des Kita-Betriebes geben sollen. Selbstverständlich beachten wir bei der Zusammenstellung dieser Fotogalerien geltende Datenschutzbestimmungen und sind dabei im engen Kontakt mit Eltern und Kindern. Sie halten eines der nachfolgenden Bilder für unangemessen? Bitte <g-link to="/kontakt/">kontaktieren Sie uns</g-link>!</p>
          <hr class="is-large">
          <p v-if="$page.allGalleries.totalCount == 0" class="has-text-danger">Zurzeit sind keine Fotostrecken öffentlich.</p>
          <div v-for="(gallery, index) in galleries" :key="index" class="box">
            <div class="columns">
              <div class="column is-one-quarter">
                <h4 class="title is-5">{{gallery.title}}</h4>
                <p class="content">{{gallery.description}}</p>
              </div>
              <div class="column"><Gallery :photos="gallery.images"></Gallery></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </Layout>
</template>

<page-query>
  query {
    allGalleries(filter: {online: {eq: true}}) {
      totalCount
      edges {
        node {
          title
          description
          images {
            path
          }
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
    title: 'Fotogalerie'
  },
  data() {
    return {
      galleries: []
    }
  },
  mounted() {
    console.log(this.$page.allGalleries.edges)
    this.$page.allGalleries.edges.forEach(edge => {
      var images = []
      edge.node.images.forEach(image => {
        images.push(process.env.GRIDSOME_COCKPIT_URL + image.path)
      })
      this.galleries.push({
        title: edge.node.title,
        description: edge.node.description,
        images: images
      })
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