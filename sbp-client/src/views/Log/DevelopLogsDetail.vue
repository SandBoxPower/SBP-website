<template>
  <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal"><img src="../../assets/img/close-icon.svg" alt="Close modal" v-on:click="handleClick"/></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Project Details Go Here-->
                <h2 class="text-uppercase">{{ log.title }}</h2>
                <p class="item-intro text-muted">{{ log.subtitle }}</p>
                <img class="img-fluid d-block mx-auto" v-for="img in log.imgInner" :key="img" :src="img" alt="..." />
                <p>{{log.content}}</p>
                <ul class="list-inline">
                  <li>Date: {{log.date}}</li>
                  <li>Category: {{log.category}}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button" v-on:click="handleClick">
                  <i class="fas fa-times mr-1"></i>
                  Close Log
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevelopLogsDetail",
  props: {
    log: {default: null, type: Object}
  },
  methods: {
    handleClick(){
      this.$emit('close-dialog')
    }
  },
}
</script>

<style scoped>

</style>