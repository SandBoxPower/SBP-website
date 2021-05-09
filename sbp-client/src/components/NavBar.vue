<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
<!--      <a class="navbar-brand js-scroll-trigger" href="/"><img src="../assets/img/logo.png" alt="..." /></a>-->
<!--      <a class="navbar-brand js-scroll-trigger"><img src="../assets/img/logo.png" alt="..." /></a>-->

      <a class="navbar-brand js-scroll-trigger" id="brand-logo"><img class="" src="../assets/img/logo-fixed.png" alt="..." /></a>

      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars ml-1"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Game</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Logs</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Progress</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">Team</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Discussion</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { swap } from '@/js/scripts';
export default {
  name: "NavBar",
  mounted () {
    swap()
  }
}
</script>

<style lang="scss" scoped>
#brand-logo {
  //img {
  //  max-width: 100%;
  //  max-height: 100%;
  //  margin: auto;
  //  display:block;
  //}
}
</style>