<template>
  <Layout>
    <section class="hero is-danger is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Kontakt
          </h1>
          <h2 class="subtitle">
            Kommen Sie vorbei, rufen Sie an, oder schreiben Sie uns!
          </h2>
        </div>
      </div>
    </section>
    <section id="kontakt" class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h3 class="title is-size-5">So erreichen Sie uns</h3>
            <div class="card">
              <div class="card-image">
                <div class="map-responsive">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732.0928381601534!2d9.051635056735472!3d53.47811470903007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b146a0d2e77d8d%3A0x212263f92311395e!2sKindertagesst%C3%A4tte%20Oerel!5e0!3m2!1sde!2sde!4v1577261080696!5m2!1sde!2sde" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
              </div>
              <div class="card-content">
                <div class="content">
                  <p>
                    <strong>Kindertagesstätte Oerel</strong> <br>
                    Logedamm 3 <br>
                    27432 Oerel
                  </p>
                  <p class="has-text-weight-bold"><i class="fas fa-envelope has-text-danger"></i><Email class="mail" email="kindergarten.oerel@web.de"></Email></p>
                  <p class="has-text-weight-bold"><i class="fas fa-phone has-text-danger"></i> 04765 1505</p>
                  <p class="has-text-weight-bold"><i class="fas fa-fax has-text-danger"></i> 04765 830801</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <h3 class="title is-size-5">Ansprechpartner</h3>
            <div class="columns">
              <div class="column">
                <div class="box">
                  <p class="heading">Leiterin</p>
                  <p class="title is-size-6">Adelheid Pohl</p>
                </div>
              </div>
              <div class="column">
                <div class="box">
                  <p class="heading">Träger</p>
                  <p class="title is-size-6">Gemeinde Oerel <a href="https://www.gemeinde-oerel.de/" target="_blank"><i class="fas fa-external-link-alt"></i></a></p>
                </div>
              </div>
            </div>
            <hr>
            <h3 class="title is-size-5">Kontaktformular</h3>
            <p class="subtitle is-size-6">Schreiben Sie uns hier eine kurze Email. Bei dringenden Themen rufen Sie bitte direkt an.</p>
            <div class="field">
              <label class="label">Ihr Name</label>
              <div class="control has-icons-left">
                <input v-model="contactForm.name" v-bind:class="{'is-danger': contactForm.errors.name}" class="input" type="text" placeholder="Vor- und Nachname">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <p v-if="contactForm.errors.name" class="help is-danger"><i class="fas fa-times"></i> Bitte geben Sie Ihren Vor- und Nachnamen ein.</p>
            </div>
            <div class="field">
              <label class="label">Ihre Email-Adresse</label>
              <div class="control has-icons-left">
                <input v-model="contactForm.email" v-bind:class="{'is-danger': contactForm.errors.email}" class="input" type="email" placeholder="Email-Adresse">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <p v-if="contactForm.errors.email" class="help is-danger"><i class="fas fa-times"></i> Die eingegebene Email-Adresse scheint ungültig zu sein.</p>
            </div>
            <div class="field">
              <label class="label">Ihre Nachricht</label>
              <div class="control">
                <textarea v-model="contactForm.message" v-bind:class="{'is-danger': contactForm.errors.message}" class="textarea" placeholder="Womit können wir Ihnen helfen?"></textarea>
              </div>
              <p v-if="contactForm.errors.message" class="help is-danger"><i class="fas fa-times"></i> Damit wir Ihnen helfen können, tragen Sie bitte Ihr Anliegen in dieses Feld ein.</p>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input v-model="contactForm.privacy" type="checkbox">
                  Ich habe die <a href="https://www.gemeinde-oerel.de/j/privacy">Datenschutzerklärung <i class="fas fa-external-link-alt"></i></a> gelesen und stimme ihr zu.
                </label>
              </div>
              <p v-if="contactForm.errors.privacy" class="help is-danger"><i class="fas fa-times"></i> Sie müssen unserer Datenschutzerklärung zustimmen.</p>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-danger" v-on:click="submitForm()"><strong>Absenden</strong></button>
              </div>
              <div class="control">
                <button class="button is-danger" v-on:click="clearForm()">Abbrechen</button>
              </div>
            </div>
            <p v-if="contactForm.success" class="has-text-success"><i class="fas fa-check"></i> Ihre Nachricht wurde erfolgreich gesendet!</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import axios from 'axios'
import Email from '../components/Email.vue'
export default {
  components: {
    Email
  },
  metaInfo: {
    title: 'Kontakt'
  },
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: '',
        privacy: false,
        errors: {
          name: false,
          email: false,
          message: false,
          privacy: false
        },
        success: false
      }
    }
  },
  methods: {
    clearForm: function() {
      this.contactForm.errors = {
        name: false,
        email: false,
        message: false,
        privacy: false
      }
      this.contactForm.name = ''
      this.contactForm.email = ''
      this.contactForm.message = ''
      this.contactForm.privacy = ''
    },
    validateEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm: function() {
      var submit = true
      const cockpitToken = '57f138d8700adc53f2d667e37d4c80'
      if(this.contactForm.name == '' || this.contactForm.name.length < 4 || this.contactForm.name.indexOf(' ') == -1) {
        submit = false
        this.contactForm.errors.name = true
      } else { this.contactForm.errors.name = false }
      if(!this.validateEmail(this.contactForm.email)) {
        submit = false
        this.contactForm.errors.email = true
      } else { this.contactForm.errors.email = false }
      if(this.contactForm.message == '') {
        submit = false
        this.contactForm.errors.message = true
      } else { this.contactForm.errors.message = false }
      if(!this.contactForm.privacy) {
        submit = false
        this.contactForm.errors.privacy = true
      } else { this.contactForm.errors.privacy = false }
      if(submit) {
        this.contactForm.success = true
        axios({
          method: 'post',
          url: process.env.GRIDSOME_COCKPIT_URL + '/api/forms/submit/contactform?token=' + process.env.GRIDSOME_COCKPIT_FORM_TOKEN,
          //url: 'https://cockpit.kita-oerel.de/api/forms/submit/contactform?token=57f138d8700adc53f2d667e37d4c80',
          data: {
            form: {
              Name: this.contactForm.name,
              Email: this.contactForm.email,
              Nachricht: this.contactForm.message
            }
          }
        })
        this.clearForm()
      }
    }
  }
}
</script>

<style scoped>
  .mail {
    margin-left: 5px;
  }
</style>