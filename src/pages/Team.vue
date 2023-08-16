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
          <li class="item is-active">
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
            <g-link to="/galerie/">
              <span class="icon is-small has-text-success"><i class="fas fa-images"></i></span>
              <span>Fotogalerie</span>
            </g-link>
          </li>
        </ul>
      </div>
      <section class="section">
        <div class="container">
          <h3 class="title is-size-4">Unser Team</h3>
          <p class="content">In unserem Haus sind zurzeit 25 pädagogische Angestellte, sowie vier Reinigungskräfte und ein Hausmeister beschäftigt. Es sind drei Stellen für ein freiwilliges soziales Jahr eingerichtet und jährlich besetzt und es befinden sich stets Auszubildende und Praktikanten in der Einrichtung. Alle zusammen ergeben ein sehr qualifiziertes und vielfältiges Team, das stets für die Belange und Bedürfnisse der Kinder tätig ist. Stetige Veränderungen im Alltagsleben der Kinder erfordern ein hohes Maß an Flexibilität, bedürfnisorientiertes Handeln sowie eine ausgeprägte Beobachtungsfähigkeit.</p>
          <hr class="is-large">
          <div class="columns is-multiline">
            <div v-for="(member, index) in $page.allTeam.edges" :key="index" class="column is-one-third">
              <div class="box">
                <div class="figure avatar" style="position: relative; width: 100%; aspect-ratio: 1/1;">
                  <img v-bind:src="member.node.picture" v-bind:alt="member.node.name" style="object-fit: cover; object-position: top; width: 100%; height: 100%;">
                </div>
                <hr>
                <p class="heading">{{member.node.job}}</p>
                <p class="title is-size-5">{{member.node.name}}</p>
                <p class="content">{{member.node.description}}</p>
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
    allTeam(sortBy: "order", order: ASC) {
      edges {
        node {
          name
          job
          description
          picture
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Unser Team'
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
