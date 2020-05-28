<template>
  <nav class="navbar is-transparent is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <g-link class="navbar-item" to="/">
          <img id="logo-mobile" class="is-hidden-tablet" src="../assets/images/logo.png" alt="Kindertagesstätte Oerel">
          <img id="logo-tablet" class="is-hidden-widescreen is-hidden-mobile" src="../assets/images/logo.png" alt="Kindertagesstätte Oerel">
          <img id="logo-desktop" class="is-hidden-touch is-hidden-desktop-only" src="../assets/images/logo.png" alt="Kindertagesstätte Oerel">
        </g-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" v-on:click="showMenu = !showMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{'is-active': showMenu}">
        <div class="navbar-end">
          <g-link class="navbar-item" to="/">
            <span class="icon has-text-success">
              <i class="fas fa-home"></i>
            </span>
            <span>Startseite</span>
          </g-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <g-link class="navbar-link" to="/unser-haus/">
              Über Uns
            </g-link>
            <div id="ueberuns-submenu" class="navbar-dropdown is-boxed">
              <g-link class="navbar-item" to="/unser-haus/">
                <span class="icon has-text-info">
                  <i class="fas fa-school"></i>
                </span>
                <span>Unser Haus</span>
              </g-link>
              <g-link class="navbar-item" to="/team/">
                <span class="icon has-text-success">
                  <i class="fas fa-users"></i>
                </span>
                <span>Unser Team</span>
              </g-link>
              <g-link class="navbar-item" to="/stellen/">
                <span class="icon has-text-danger">
                  <i class="fas fa-briefcase"></i>
                </span>
                <span>Stellen</span>
              </g-link>
              <g-link class="navbar-item" to="/eltern/">
                <span class="icon has-text-warning">
                  <i class="fas fa-user-friends"></i>
                </span>
                <span>Eltern</span>
              </g-link>
              <g-link class="navbar-item" to="/galerie/">
                <span class="icon has-text-success">
                  <i class="fas fa-images"></i>
                </span>
                <span>Fotogalerie</span>
              </g-link>
            </div>
          </div>
          <g-link class="navbar-item" to="/konzeption/">
            <span class="icon has-text-warning">
              <i class="fas fa-file-alt"></i>
            </span>
            <span>Konzeption</span>
          </g-link>
          <g-link class="navbar-item" to="/kontakt/">
            <span class="icon has-text-danger">
              <i class="fas fa-envelope"></i>
            </span>
            <span>Kontakt</span>
          </g-link>
          <g-link class="navbar-item" to="/downloads/">
            <span class="icon has-text-info">
              <i class="fas fa-file-download"></i>
            </span>
            <span>Download</span>
          </g-link>
        </div>
      </div>
    </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        showMenu: false
      }
    }
  }
</script>

<style scoped>
  #logo-mobile {
    max-height: 2.5rem;
  }
  #logo-tablet {
    max-height: 3.5rem;
  }
  #logo-desktop {
    max-height: 4.5rem;
  }
</style>