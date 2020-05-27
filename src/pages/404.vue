<template>
  <Layout>
    <section id="404" class="section">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <div class="icon is-large has-text-danger">
                  <i class="fas fa-2x fa-dizzy"></i>
                </div>
              </div>
              <div class="level-item">
                <h2 class="title">Upsi.</h2>
              </div>
            </div>
          </div>
          <p>Die Seite, die Sie suchen, existiert scheinbar nicht. Bitte prüfen Sie den Link.</p>
          <p><a href="/">Zur Startseite <i class="fas fa-external-link-alt"></i></a></p>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404'
  }
}
</script>
