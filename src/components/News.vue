<template>
  <div id="news">
    <h3 class="title is-size-4">Aktuelle Informationen</h3>
    <p v-if="news.length == 0" class="content has-text-success">Momentan gibt es keine wichtigen Informationen.</p>
    <div class="columns is-multiline">
      <div v-for="(entry, index) in news" :key="index" class="column is-half">
        <div class="box">
          <div class="content">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <div v-if="entry.critical" class="icon is-large has-text-danger"><i class='fas fa-2x fa-exclamation-triangle'></i></div>
                  <div v-else class="icon is-large has-text-info"><i class='fas fa-2x fa-info-circle'></i></div>
                </div>
                <div class="level-item">
                  <div class="content">
                    <p class="heading">{{entry.timestamp}}</p>
                    <h4 class="title is-size-6">{{entry.headline}}</h4>
                  </div>
                </div>
              </div>
            </div>
            <p style="height: 45px; overflow: hidden;" v-html="entry.fullDescription"></p>
            <p><a v-on:click="entry.modal = true">Weiterlesen</a></p>
          </div>
        </div>
        <div v-bind:class="{'is-active': entry.modal}" class="modal">
          <div class="modal-background" v-on:click="entry.modal = false"></div>
          <div class="modal-content">
            <div class="box">
              <div class="content">
                <div class="level">
                  <div class="level-left">
                    <div class="level-item">
                      <div v-if="entry.critical" class="icon is-large has-text-danger"><i class='fas fa-2x fa-exclamation-triangle'></i></div>
                      <div v-else class="icon is-large has-text-info"><i class='fas fa-2x fa-info-circle'></i></div>
                    </div>
                    <div class="level-item">
                      <div class="content">
                        <p class="heading">{{entry.timestamp}}</p>
                        <h4 class="title is-size-6">{{entry.headline}}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <p v-html="entry.fullDescription"></p>
                <div class="columns">
                  <div v-for="(image, index) in entry.images" :key="index" class="column">
                    <g-image v-bind:src="image"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button v-on:click="entry.modal = false" class="modal-close is-large" aria-label="close"></button>
        </div>
      </div>
    </div>
    <hr class="is-large">
  </div>
</template>

<static-query>
  query {
    allNews {
      edges {
        node {
          id
          modified
          critical
          headline
          description
          images {
            path
          }
          online
        }
      }
    }
  }
</static-query>

<script>
  export default {
    name: 'News',
    data() {
      return {
        news: [],
        newsIndex: null
      }
    },
    mounted() {
      this.$static.allNews.edges.forEach(edge => {
        if(edge.node.online) {
          const mod = new Date(edge.node.modified * 1000)
          var images = []
          edge.node.images.forEach(image => {
            images.push(process.env.GRIDSOME_COCKPIT_URL + image.path)
          })
          this.news.push({
            critical: edge.node.critical,
            timestamp: mod.toLocaleDateString('de-DE') + ', ' + mod.getHours() + ':' + (mod.getMinutes() > 9 ? mod.getMinutes() : '0' + mod.getMinutes()) + ' Uhr',
            shortDescription: edge.node.description.substr(0, 90) + '... ',
            fullDescription: edge.node.description,
            images: images,
            headline: edge.node.headline,
            modal: false
          })
        }
      })
    }
  }
</script>