const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    // Fetch all data from Cockpit CMS:
    const [newsResponse, eventsResponse] = await Promise.all([
      axios.get(process.env.GRIDSOME_COCKPIT_URL + '/api/collections/get/news?token=' + process.env.COCKPIT_CONTENT_TOKEN, {headers: {'Content-Type': 'application/json'}}),
      axios.get(process.env.GRIDSOME_COCKPIT_URL + '/api/collections/get/termine?token=' + process.env.COCKPIT_CONTENT_TOKEN, {headers: {'Content-Type': 'application/json'}})
    ])
    // Create Gridsome data collections:
    const news = actions.addCollection('News')
    for(const entry of newsResponse.data.entries) {
      news.addNode({
        id: entry._id,
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
  })

  api.createPages(({ createPage }) => {

  })
}