<template>
  <Layout>
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Download
          </h1>
          <h2 class="subtitle">
            Formulare und Informationen zum Herunterladen
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <p v-if="downloads.length == 0">Aktuell stehen keine Dateien zum Download bereit.</p>
          <div v-for="(download, index) in downloads" :key="index" class="box">
            <div class="columns is-vcentered">
              <div class="column has-text-centered"><span class='icon is-large has-text-danger'><i class='fas fa-3x fa-file-alt'></i></span></div>
              <div class="column is-four-fifths">
                <h4 class="title is-5">{{download.title}}</h4>
                <p class="subtitle is-6">{{download.subtitle}}</p>
                <a v-bind:href="download.file" class="button is-info">Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    allDownloads {
      edges {
        node {
          id
          title
          subtitle
          file
          online
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Downloads'
  },
  data() {
    return {
      downloads: []
    }
  },
  mounted() {
    this.$page.allDownloads.edges.forEach(edge => {
      if(edge.node.online) {
        this.downloads.push({
          title: edge.node.title,
          subtitle: edge.node.subtitle,
          file: edge.node.file
        })
      }
    })
  }
}
</script>
