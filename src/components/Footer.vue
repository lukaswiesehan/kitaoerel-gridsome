<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p class="content">
        &copy; Kindertagesstätte Oerel {{footerYear}}<br>
        <g-link to="/kontakt/">Kontakt</g-link> | <g-link to="/impressum/">Impressum</g-link> | <a href="https://www.gemeinde-oerel.de/j/privacy">Datenschutz <i class="fas fa-external-link-alt"></i></a>
      </p>
      <p class="content is-size-7">coded with <i class="fas fa-heart"></i> and <i class="fas fa-coffee"></i> by <a href="https://www.lukaswiesehan.de">@lukaswiesehan</a></p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        footerYear: new Date().getFullYear()
      }
    }
  }
</script>
