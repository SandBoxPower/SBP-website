<template>
  <section class="page-section" id="about">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Development Progress</h2>
        <h3 class="section-subheading text-muted">Keep eyes on the progress, Game is coming soon...</h3>
      </div>
      <ul class="timeline">
        <ProgressCard v-for="item in progress" :key="item.id" :item="item" />

        <li class="timeline-inverted">
          <div class="timeline-image">
            <h4>
              TanTan's
              <br />
              Bizarre Adventure
              <br />
              Released!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ProgressCard from "@/views/Progress/ProgressCard";
export default {
  name: "AboutPage",
  components: { ProgressCard },
  data() {
    return {
      progress: []
    }
  },
  methods: {
    async loadProgress(){
      try {
        const dt = await this.$firebase.getProgress()
        this.progress = dt.docs.map(item => item.data())
      } finally {
        console.log('load')

      }
    }
  },
  mounted() {
    this.loadProgress()
  },
}
</script>

<style scoped>

</style>