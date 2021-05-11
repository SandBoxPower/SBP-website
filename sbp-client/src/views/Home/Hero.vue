<template class="hero">
  <header class="masthead">
    <VideoPopup />
    <div class="container">
      <div class="masthead-subheading">Welcome To SandBox Power!</div>
      <div class="masthead-heading text-uppercase">Play TanTan's Bizarre Adventure Now</div>
      <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      <a class="btn btn-info btn-xl text-uppercase js-scroll-trigger" v-on:click="lightbox_open">
        Watch Video <i class="far fa-play-circle"></i>
      </a>
      <a class="btn btn-success btn-xl text-uppercase js-scroll-trigger" href="https://yuhanj.itch.io/tantan" target="_blank">
        Download <i class="fas fa-download"></i>
      </a>
    </div>

  </header>
</template>

<script>
import VideoPopup from "@/components/VideoPopup";
export default {
  name: "Hero",
  components: { VideoPopup },
  data() {
    return {
      isPlaying: false,
    }
  },
  methods: {
    playVideo(){
      this.isPlaying = true
    },
    lightbox_open() {
      const lightBoxVideo = document.getElementById("VisaChipCardVideo");
      window.scrollTo(0, 0);
      document.getElementById('light').style.display = 'block';
      document.getElementById('fade').style.display = 'block';
      lightBoxVideo.play();
}
  }
}
</script>

<style scoped>

</style>