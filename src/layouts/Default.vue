<template>
  <div id="app">
    <NavBar></NavBar>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import NavBar from '../components/NavBar.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'App',
    components: {
      NavBar,
      Footer
    }
  }
</script>

<style lang="scss">
  @charset "utf-8";

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 200;
    src: url('../assets/fonts/nunito-sans-v5-latin-200.eot'); /* IE9 Compat Modes */
    src: local('Nunito Sans ExtraLight'), local('NunitoSans-ExtraLight'),
        url('../assets/fonts/nunito-sans-v5-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/fonts/nunito-sans-v5-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
        url('../assets/fonts/nunito-sans-v5-latin-200.woff') format('woff'), /* Modern Browsers */
        url('../assets/fonts/nunito-sans-v5-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/nunito-sans-v5-latin-200.svg#NunitoSans') format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/nunito-sans-v5-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Nunito Sans Regular'), local('NunitoSans-Regular'),
        url('../assets/fonts/nunito-sans-v5-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/fonts/nunito-sans-v5-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../assets/fonts/nunito-sans-v5-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../assets/fonts/nunito-sans-v5-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/nunito-sans-v5-latin-regular.svg#NunitoSans') format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    src: url('../assets/fonts/nunito-sans-v5-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Nunito Sans Bold'), local('NunitoSans-Bold'),
        url('../assets/fonts/nunito-sans-v5-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/fonts/nunito-sans-v5-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('../assets/fonts/nunito-sans-v5-latin-700.woff') format('woff'), /* Modern Browsers */
        url('../assets/fonts/nunito-sans-v5-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/nunito-sans-v5-latin-700.svg#NunitoSans') format('svg'); /* Legacy iOS */
  }

  @import "../../node_modules/bulma/sass/utilities/initial-variables";

  $family-sans-serif: "Nunito Sans", sans-serif;
  $navbar-height: 6rem;
  $navbar-item-img-max-height: 5rem;
  $section-padding: 4rem 1rem;
  $box-padding: 2rem;

  $menu-item-active-background-color: $green;
  $menu-item-active-color: $white;

  $column-gap: 1.5rem;

  $footer-padding: 3rem 1.5rem 4rem;

  $link: $green;

  @import "../../node_modules/bulma/bulma";
  @import "../../node_modules/bulma-timeline/dist/css/bulma-timeline.sass";
  @import "../../node_modules/bulma-divider/dist/css/bulma-divider.sass";

  #app {
    padding-top: 6rem;
    hyphens: auto;
    -webkit-hyphens: auto;
  }
  .map-responsive, .youtube-responsive {
      overflow: hidden;
      padding-bottom: 56.25%;
      position: relative;
      height: 0;
  }
  .map-responsive iframe, .youtube-responsive iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
  }
  .card {
      overflow: hidden;
      border-radius: $radius-large;
  }
  img {
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  .content img {
      border-radius: $radius-large;
      box-shadow: 0 0.5em 1em -0.125em rgba($black, 0.1), 0 0px 0 1px rgba($black, 0.02);
      width: 100%;
      margin-top: 1rem;
  }
  hr.is-large {
      margin: 3rem 0;
  }
  @media only screen and (min-width: 1024px) {
  #app {
    padding-top: 8rem;
  }
}
</style>