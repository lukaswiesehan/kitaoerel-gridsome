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
          <li class="item is-active">
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
          <div class="columns">
            <div class="column is-one-third">
              <h3 class="title is-size-4">Eltern</h3>
              <p class="content">{{$page.parents.text}}</p>
            </div>
            <div class="column">
              <div class="figure">
                <img v-bind:src="$page.parents.photo" alt="Elternvertreter">
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
    parents(id: 1) {
      text
      photo
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Eltern'
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