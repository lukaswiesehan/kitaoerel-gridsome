<template>
  <div id="calendar">
    <h3 class="title is-size-4">Kita-Kalender</h3>
    <div class="box">
      <div class="columns">
        <div class="column is-one-third">
          <aside class="menu">
            <p class="menu-label">
              Die nächsten 12 Monate
            </p>
            <ul class="menu-list">
              <li v-for="month in months" :key="month.id"><a v-bind:class="{'is-active': selectedMonth == month.id}" v-on:click="selectedMonth = month.id">{{month.name}}</a></li>
            </ul>
          </aside>
        </div>
        <div class=column>
          <div v-for="month in months" :key="month.id" v-bind:class="{'is-hidden': selectedMonth != month.id}" class="cal-month">
            <div class="timeline">
              <header class="timeline-header">
                <span class="tag is-medium is-success">{{month.name}}</span>
              </header>
              <div v-if="month.entries.length == 0" class="timeline-item">
                <div class="timeline-content">
                  <p>Im {{month.name}} sind noch keine Termine eingetragen.</p>
                </div>
              </div>
              <div v-for="(entry, index) in month.entries" :key="index" class="timeline-item">
                <div class="timeline-marker is-success"></div>
                <div class="timeline-content">
                  <p class="heading">{{entry.date.toLocaleDateString()}}</p>
                  <p>{{entry.title}}</p>
                </div>
              </div>
              <div class="timeline-header">
                <a v-on:click="selectedMonth = month.nextID" class="tag btn-month">{{month.next}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
    allEvents {
      edges {
        node {
          id
          title
          start
          end 
        }
      }
    }
  }
</static-query>

<script>
  export default {
    name: 'Calendar',
    data() {
      return {
        currentMonth: new Date().getMonth() + 1,
        months: null,
        selectedMonth: new Date().getMonth() + 1
      }
    },
    methods: {
      fetchData: function() {
        const cockpitToken = 'da498ad0f30723572c3c0f3a422fcd'
        const cockpitPath = 'https://cockpit.kita-oerel.de'
        fetch(cockpitPath + '/api/collections/get/termine?token=' + cockpitToken)
        .then(data => data.json())
        .then(data => {
          var entries = []
          data.entries.forEach(function(entry) {
            var start = new Date(entry.start)
            if(entry.end !='') {
              var end = new Date(entry.end)
              entries.push({'title': '(Start) ' + entry.title, 'date': start})
              entries.push({'title': '(Ende) ' + entry.title, 'date': end})
            } else {
              entries.push({'title': entry.title, 'date': start})
            }
          })
          entries.sort(function(a, b) {return a.date - b.date})
          entries.forEach(entry => {
            var year = entry.date.getFullYear()
            var month = entry.date.getMonth() + 1 
            for(var i = 0; i < 12; i++) {
              if(this.months[i].id == month && this.months[i].year == year) {
                this.months[i].entries.push(entry)
                break;
              }
            }
          })
        })
      },
      queryData() {
        var entries = []
        this.$static.allEvents.edges.forEach(edge => {
          var start = new Date(edge.node.start)
          if(edge.node.end !='') {
            var end = new Date(edge.node.end)
            entries.push({'title': '(Start) ' + edge.node.title, 'date': start})
            entries.push({'title': '(Ende) ' + edge.node.title, 'date': end})
          } else {
            entries.push({'title': edge.node.title, 'date': start})
          }
        })
        entries.sort(function(a, b) {return a.date - b.date})
        entries.forEach(entry => {
          var year = entry.date.getFullYear()
          var month = entry.date.getMonth() + 1 
          for(var i = 0; i < 12; i++) {
            if(this.months[i].id == month && this.months[i].year == year) {
              this.months[i].entries.push(entry)
              break;
            }
          }
        })
      },
      getSortedMonths() {
        var months = [
          {name: 'Januar', next: 'Februar', id: 1, nextID: 2, entries: [], year: null},
          {name: 'Februar', next: 'März', id: 2, nextID: 3, entries: [], year: null},
          {name: 'März', next: 'April', id: 3, nextID: 4, entries: [], year: null},
          {name: 'April', next: 'Mai', id: 4, nextID: 5, entries: [], year: null},
          {name: 'Mai', next: 'Juni', id: 5, nextID: 6, entries: [], year: null},
          {name: 'Juni', next: 'Juli', id: 6, nextID: 7, entries: [], year: null},
          {name: 'Juli', next: 'August', id: 7, nextID: 8, entries: [], year: null},
          {name: 'August', next: 'September', id: 8, nextID: 9, entries: [], year: null},
          {name: 'September', next: 'Oktober', id: 9, nextID: 10, entries: [], year: null},
          {name: 'Oktober', next: 'November', id: 10, nextID: 11, entries: [], year: null},
          {name: 'November', next: 'Dezember', id: 11, nextID: 12, entries: [], year: null},
          {name: 'Dezember', next: 'Januar', id: 12, nextID: 1, entries: [], year: null}
        ]
        var sortedMonths = []
        var monthID = this.currentMonth
        var year = new Date().getFullYear()
        for(var i = 0; i < 12; i++) {
          var month = months[monthID - 1]
          month.year = year
          sortedMonths.push(month)
          monthID++
          if(monthID == 13) {
            monthID = 1
            year++
          } 
        }
        this.months = sortedMonths
      }
    },
    mounted() {
      this.getSortedMonths()
      this.queryData()
    }
  }
</script>

<style scoped>

</style>