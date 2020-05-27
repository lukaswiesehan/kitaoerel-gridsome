<template>
  <div class="gallery">
      <carousel :autoplay="true" :autoplay-timeout="3000" :per-page="1" :pagination-position="'top-overlay'" :pagination-active-color="'#48C774'">
        <slide v-for="(photo, index) in photos" :key="index">
          <img v-bind:src="photo">
        </slide>
      </carousel>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    components: {
      Carousel: () =>
        import ('vue-carousel/src/index')
        .then(m => m.Carousel)
        .catch(),
      Slide: () =>
        import ('vue-carousel/src/index')
        .then(m => m.Slide)
        .catch()
    },
    props: {
      photos: Array
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      next: function() {
        if(this.currentIndex < (this.photos.length - 1)) this.currentIndex++
      },
      prev: function() {
        if(this.currentIndex > 0) this.currentIndex--
      }
    }
  }
</script>

<style scoped>

</style>