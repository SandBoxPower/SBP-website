<template>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Development Logs</h2>
        <h3 class="section-subheading text-muted">Let see what funny things happened during the development</h3>
      </div>
      <div class="row">
          <DevelopLogsCard v-for="log in logs" :key="log" :log=log />
      </div>
    </div>
  </section>
</template>

<script>
import DevelopLogsCard from "@/views/Log/DevelopLogsCard";

export default {
  name: "DevelopLogs",
  components: { DevelopLogsCard },
  data() {
    return {
      logs: [],
    }
  },
  methods: {

    async loadLogs(){
      try {
        const dt = await this.$firebase.getLog()
        this.logs = dt.docs.map(item => item.data())
      } finally {
        console.log('loading')
      }
    }
  },
  mounted()  {
    this.loadLogs()
  }
}
</script>

<style scoped>

</style>