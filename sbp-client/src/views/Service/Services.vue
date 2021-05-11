<template>
  <section class="page-section" id="services">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Game Concepts</h2>
        <h3 class="section-subheading text-muted">A Special 2D roguelike RPG</h3>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-dungeon fa-stack-1x fa-inverse"></i>
                        </span>
          <h4 class="my-3">{{ct1.title}}</h4>
          <p class="text-muted">{{ct1.content}}</p>
        </div>
        <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fab fa-d-and-d fa-stack-1x fa-inverse"></i>
                        </span>
          <h4 class="my-3">{{ct2.title}}</h4>
          <p class="text-muted">{{ct2.content}}</p>
        </div>
        <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-robot fa-stack-1x fa-inverse"></i>
                        </span>
          <h4 class="my-3">{{ct3.title}}</h4>
          <p class="text-muted">{{ct3.content}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      ct1: {title: "Randomness", content: "Every time you will get into a random dungeon with random numbers of random enemies. There is no way to predict what the next challenge is. Try to play tactically because you may lose the rewards you got at this time. But of course, high risk high return!",},
      ct2: {title: "Strategy", content: "Even though TanTan can summon cup soldiers, TanTan cannot directly attack enemies. You will decide when to protect your soldiers and when to hide behind.",},
      ct3: {title: "Growth", content: "You can level up TanTan and your cup soldiers with the coins you get from dungeons. Remember, the enemy will get stronger and stronger. You need more powerful troops to pass the dungeon. "}
    }
  }
}
</script>

<style scoped>
#services {
  min-height:80vh;
}
</style>