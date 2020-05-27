const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    // Fetch all data from Cockpit CMS:
    const [newsResponse, eventsResponse, conceptResponse, downloadsResponse, aboutPhotosResponse, teamResponse] = await Promise.all([
      axios.get(process.env.GRIDSOME_COCKPIT_URL + '/api/collections/get/news?token=' + process.env.COCKPIT_CONTENT_TOKEN, {headers: {'Content-Type': 'application/json'}}),
      axios.get(process.env.GRIDSOME_COCKPIT_URL + '/api/collections/get/termine?token=' + process.env.COCKPIT_CONTENT_TOKEN, {headers: {'Content-Type': 'application/json'}}),
      axios.get(process.env.GRIDSOME_COCKPIT_URL + '/api/collections/get/konzeption?token=' + process.env.COCKPIT_CONTENT_TOKEN, {headers: {'Content-Type': 'application/json'}}),
      axios.get(process.env.GRIDSOME_COCKPIT_URL + '/api/collections/get/downloads?token=' + process.env.COCKPIT_CONTENT_TOKEN, {headers: {'Content-Type': 'application/json'}}),
      axios.get(process.env.GRIDSOME_COCKPIT_URL + '/api/singletons/get/ueberuns?token=' + process.env.COCKPIT_CONTENT_TOKEN, {headers: {'Content-Type': 'application/json'}}),
      axios.get(process.env.GRIDSOME_COCKPIT_URL + '/api/collections/get/team?token=' + process.env.COCKPIT_CONTENT_TOKEN, {headers: {'Content-Type': 'application/json'}})
    ])
    // Create Gridsome data collections:
    const news = actions.addCollection('News')
    for(const entry of newsResponse.data.entries) {
      news.addNode({
        id: entry._id,
        modified: entry._modified,
        critical: entry.critical,
        headline: entry.headline,
        description: entry.description,
        online: entry.online
      })
    }
    const events = actions.addCollection('Events')
    for(const entry of eventsResponse.data.entries) {
      events.addNode({
        id: entry._id,
        title: entry.title,
        start: entry.start,
        end: entry.end
      })
    }
    const conceptChapters = actions.addCollection('ConceptChapters')
    for(const entry of conceptResponse.data.entries) {
      if(entry.online) {
        conceptChapters.addNode({
          id: entry._id,
          title: entry.title,
          content: entry.content,
          online: entry.online
        })
      }
    }
    const downloads = actions.addCollection('Downloads')
    for(const entry of downloadsResponse.data.entries) {
      downloads.addNode({
        id: entry._id,
        title: entry.title,
        subtitle: entry.subtitle,
        file: process.env.GRIDSOME_COCKPIT_URL + '/' + entry.file,
        online: entry.online
      })
    }
    const aboutPhotos = actions.addCollection('AboutPhotos')
    for(const entry of aboutPhotosResponse.data.gallery) {
      aboutPhotos.addNode({
        path: process.env.GRIDSOME_COCKPIT_URL + entry.path
      })
    }
    const team = actions.addCollection('Team')
    for(const entry of teamResponse.data.entries) {
      team.addNode({
        id: entry._id,
        name: entry.name,
        job: entry.job,
        description: entry.description,
        picture: process.env.GRIDSOME_COCKPIT_URL + entry.picture.path
      })
    }
  })

  api.createPages(({ createPage }) => {

  })
}