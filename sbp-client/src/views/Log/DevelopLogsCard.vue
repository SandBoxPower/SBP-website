<template>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#seeDetails" v-on:click="handleClick" >
        <div class="portfolio-hover">
          <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
        </div>
        <img class="img-fluid" :src="log.img" alt="..." />
      </a>
      <div class="portfolio-caption">
        <div class="portfolio-caption-heading">{{log.title}}</div>
        <div class="portfolio-caption-subheading text-muted">{{log.date}}</div>
      </div>
    </div>
  </div>
<DevelopLogsDetail :log="log" id="seeDetails" v-if="showDetails" v-on:close-dialog="closeDialog"/>
</template>

<script>
import DevelopLogsDetail from "@/views/Log/DevelopLogsDetail";
export default {
  name: "DevelopLogsCard",
  components: { DevelopLogsDetail },
  props: {
    log: { default: null, type: Object }
  },
  data(){
    return {
      showDetails: false,
    }
  },
  methods: {
    handleClick(){
      this.showDetails = true
      console.log(this.$props.log.id)
    },
    closeDialog(){
      this.showDetails = false
    }
  }
}
</script>

<style scoped>

</style>