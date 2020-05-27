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
            <p>
              {{entry.shortDescription}}
              <a v-on:click="entry.modal = true">mehr</a>
            </p>
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
                <p>{{entry.fullDescription}}</p>
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

<script>
  export default {
    name: 'News',
    data() {
      return {
        news: [],
        newsIndex: null
      }
    },
    methods: {
      fetchData: function() {
        const cockpitToken = 'da498ad0f30723572c3c0f3a422fcd'
        const cockpitPath = 'https://cockpit.kita-oerel.de'
        fetch(cockpitPath + '/api/collections/get/news?token=' + cockpitToken, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            filter: {online: true},
            sort: {_modified:-1},
          })
        })
        .then(data => data.json())
        .then(data => {
          console.log(data)
          data.entries.forEach(entry => {
            var mod = new Date(entry._modified * 1000)
            this.news.push({
              critical: entry.critical,
              timestamp: mod.toLocaleDateString('de-DE') + ', ' + mod.getHours() + ':' + (mod.getMinutes() > 9 ? mod.getMinutes() : '0' + mod.getMinutes()) + ' Uhr',
              shortDescription: entry.description.substr(0, 90) + '... ',
              fullDescription: entry.description,
              headline: entry.headline,
              modal: false
            })
          })
        })
      }
    },
    mounted() {
      this.fetchData();
    }
  }
</script>

<style scoped>

</style>