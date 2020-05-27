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
          <li class="item is-active">
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
            <g-link to="/galerie/">
              <span class="icon is-small has-text-success"><i class="fas fa-images"></i></span>
              <span>Fotogalerie</span>
            </g-link>
          </li>
        </ul>
      </div>
      <section class="section">
        <div class="container">
          <h3 class="title is-size-4">Stellen</h3>
          <p class="content">Hier finden Sie alle momentan ausgeschriebenen Stellen. Für das freiwillige soziale Jahr stehen jedes Jahr drei Stellen zur Verfügung.</p>
          <p class="content">Sie haben Fragen oder möchten Sich bewerben? <g-link to="/kontakt/">Hier entlang.</g-link></p>
          <hr class="is-large">
          <p v-if="$page.allJobs.totalCount == 0" class="has-text-danger">Aktuell sind keine Stellen ausgeschrieben.</p>
          <div v-for="(job, index) in $page.allJobs.edges" :key="index" class="box">
            <div class="columns is-vcentered">
              <div class="column has-text-centered"><span class='icon is-large has-text-danger'><i class="fas fa-3x fa-briefcase"></i></span></div>
              <div class="column is-four-fifths">
                <h4 class="title is-5">{{job.node.title}}</h4>
                <p class="content">{{job.node.description}}</p>
                <a v-bind:href="job.node.ad" class="button is-info">Stellenanzeige</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </Layout>
</template>

<page-query>
  query {
    allJobs(filter: {online: {eq: true}}, order: ASC) {
      totalCount
      edges {
        node {
          title
          description
          ad
          online
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Stellen'
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