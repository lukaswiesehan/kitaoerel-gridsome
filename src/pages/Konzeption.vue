<template>
  <Layout>
    <section class="hero is-warning is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Unsere Konzeption
          </h1>
          <h2 class="subtitle">
            Ein Einblick in unser pädagogisches Konzept
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <aside class="menu">
              <p class="menu-label">
                Inhaltsübersicht
              </p>
              <ul id="content-overview" class="menu-list">
                <li v-for="(chapter, index) in $page.allConceptChapters.edges" :key="index">
                  <a v-scroll-to="'#chapter-' + index">{{chapter.node.title}}</a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column is-three-quarters">
            <div v-for="(chapter, index) in $page.allConceptChapters.edges" :key="index" v-bind:id="'chapter-' + index">
              <hr v-if="index > 0" class="is-large">
              <h3 class="title is-size-4">{{chapter.node.title}}</h3>
              <div class="content"><span v-html="chapter.node.content"></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    allConceptChapters(filter: {online: {eq: true}}, order: ASC) {
      edges {
        node {
          id
          title
          content
          online
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Konzeption'
  }
}
</script>