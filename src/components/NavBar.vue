<template>
  <nav class="navbar is-transparent is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img id="logo-mobile" class="is-hidden-tablet" src="../assets/images/logo.png">
          <img id="logo-tablet" class="is-hidden-widescreen is-hidden-mobile" src="../assets/images/logo.png">
          <img id="logo-desktop" class="is-hidden-touch is-hidden-desktop-only" src="../assets/images/logo.png">
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" v-on:click="showMenu = !showMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{'is-active': showMenu}">
        <div class="navbar-end">
          <a class="navbar-item" href="/">
            <span class="icon has-text-success">
              <i class="fas fa-home"></i>
            </span>
            <span>Startseite</span>
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/unserhaus">
              Über Uns
            </a>
            <div id="ueberuns-submenu" class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="/unserhaus">
                <span class="icon has-text-info">
                  <i class="fas fa-school"></i>
                </span>
                <span>Unser Haus</span>
              </a>
              <a class="navbar-item" href="/team">
                <span class="icon has-text-success">
                  <i class="fas fa-users"></i>
                </span>
                <span>Unser Team</span>
              </a>
              <a class="navbar-item" href="/stellen">
                <span class="icon has-text-danger">
                  <i class="fas fa-briefcase"></i>
                </span>
                <span>Stellen</span>
              </a>
              <a class="navbar-item" href="/eltern">
                <span class="icon has-text-warning">
                  <i class="fas fa-user-friends"></i>
                </span>
                <span>Eltern</span>
              </a>
              <a class="navbar-item" href="/gallerie">
                <span class="icon has-text-success">
                  <i class="fas fa-images"></i>
                </span>
                <span>Fotogalerie</span>
              </a>
            </div>
          </div>
          <a class="navbar-item" href="/konzeption">
            <span class="icon has-text-warning">
              <i class="fas fa-file-alt"></i>
            </span>
            <span>Konzeption</span>
          </a>
          <a class="navbar-item" href="/kontakt">
            <span class="icon has-text-danger">
              <i class="fas fa-envelope"></i>
            </span>
            <span>Kontakt</span>
          </a>
          <a class="navbar-item" href="/downloads">
            <span class="icon has-text-info">
              <i class="fas fa-file-download"></i>
            </span>
            <span>Download</span>
          </a>
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