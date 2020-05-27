<template>
  <Layout>
    <section id="start-hero" class="hero is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-2 has-text-success is-hidden-mobile">Kindertagesstätte Oerel</h1>
          <h1 class="title is-size-3 has-text-success is-hidden-tablet">Kindertagesstätte Oerel</h1>
          <h2 id="landing-subtitle" class="subtitle is-size-3 has-text-light is-hidden-mobile">Die integrative Kindertagesstätte der Gemeinde Oerel</h2>
          <h2 id="landing-subtitle" class="subtitle is-size-4 has-text-light is-hidden-tablet">Die integrative Kindertagesstätte der Gemeinde Oerel</h2>
          <p id="landing-welcome" class="is-size-5 has-text-light">Wir freuen uns über Ihr Interesse an der Kindertagesstätte Oerel und geben Ihnen hier einen Einblick in unsere pädagogische Arbeit. Außerdem finden Sie hier Informationen zu anstehenden Ereignissen, wichtige Neuigkeiten und Formulare zum Download.</p>
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
              <ul class="menu-list">
                <li><a v-scroll-to="'#news'">Aktuelle Informationen</a></li>
                <li><a v-scroll-to="'#ueberblick'">Ein kurzer Überblick</a></li>
                <li><a v-scroll-to="'#zahlen'">Die Kita in Zahlen</a></li>
                <li><a v-scroll-to="'#calendar'">Kita-Kalender</a></li>
              </ul>
            </aside>
          </div>
          <div class="column is-three-quarters">
            <News></News>
            <div id="ueberblick" class="content">
              <div class="columns">
                <div class="column">
                  <h3 class="title is-size-4">Ein kurzer Überblick</h3>
                  <p>Mit diesen Seiten möchten wir Sie über unsere Kindertagesstätte informieren. Das Zusammenspiel von schöner und ruhiger Lage im Grünen, einem verantwortungsvollen Träger, großzügigen Betreuungszeiten und einem hoch qualifizierten Team zeichnet die Kindertagesstätte Oerel aus. Gemäß des niedersächsischen Bildungsplanes und den Handlungsempfehlungen orientieren sich Lern- und Erfahrungsangebote an den Bedürfnissen und Interessen der Kinder. Die uns anvertrauten Kinder erleben in ihrer Gruppe nach ihrem Entwicklungsstand einen Tagesablauf mit vielfältigen Möglichkeiten zum Spielen, aber auch zur Auseinandersetzung mit ihrer Umwelt. Feste Bestandteile des Betreuungsangebots sind verschiedene Projekte, Besuche der Bücherei, des Mehrgenerationenhauses, beim Kaufmann und im Schulzentrum sowie Spaziergänge in die Umgebung.</p>
                  <p>Kinder sind unsere Zukunft. Es lohnt sich, gemeinsam dafür zu arbeiten!</p>
                  <p>Marco Noetzelmann, Bürgermeister</p>
                </div>
                <div class="column">
                  <div class="figure">
                    <g-image src="~/assets/images/wegweiser.jpg" alt="Überblick"/>
                  </div>
                </div>
              </div>
            </div>
            <hr class="is-large">
            <div id="zahlen" class="columns is-vcentered">
              <div class="column">
                <h3 class="title is-size-4">Unsere Kita in Zahlen</h3>
                <p id="landing-inzahlen" class="content">In unserem Haus können Sie die unterschiedlichen Betreuungsangebote ganz individuell wahrnehmen. Während der Sommerferien bleibt die Einrichtung für 3 Wochen geschlossen - ebenso an den Tagen zwischen Weihnachten und Neujahr.</p>
                <p class="content">Sie möchten unsere Angebote nutzen? <g-link to="/kontakt/">Vereinbaren Sie einen Termin.</g-link></p>
              </div>
              <div class="column">
                <div class="content">
                  <ul>
                    <li>Betreuung von 0 Jahren bis zur Einschulung</li>
                    <li>Mo. - Fr. von 7:30 bis 17:00 Uhr</li>
                    <li>Frühbetreuung ab 6:30 Uhr möglich</li>
                    <li>Ganztagsbetreuung bis 17:00 Uhr möglich</li>
                    <li>Mittagsbetreuung von 12:30 bis 13:30 inkl. Mittagstisch</li>
                    <li>7 Betreuungsgruppen</li>
                    <li>Insgesamt 30 Angestellte</li>
                    <li>Davon 25 pädagogische Angestellte</li>
                    <li>Praxisstelle für Auszubildende</li>
                    <li>FSJ-Plätze sind eingerichtet</li>
                    <li>120 - 130 wunderbare Kinder</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr class="is-large">
            <Calendar></Calendar>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
  import News from '../components/News.vue'
  import Calendar from '../components/Calendar.vue'
  export default {
    metaInfo: {
      title: 'Die integrative Kindertagesstätte der Gemeinde Oerel'
    },
    components: {
      News,
      Calendar
    }
  }
</script>

<style scoped>
  #start-hero {
    background-image: linear-gradient(to bottom left,
    rgba(39, 61, 92, 0.2),
    rgba(39, 61, 92, 0.8)),
    url('../assets/images/zaun.jpg');
    background-position: center;
    background-size: cover;
  }
</style>
