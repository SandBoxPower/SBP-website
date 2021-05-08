<template>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Write your feedback</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="contactForm" name="sentMessage" novalidate="novalidate" v-on:submit.prevent="handleSubmit">
          <div class="row align-items-stretch mb-5">
            <div class="row">
              <div class="form-group">

                <input class="form-control" v-model="dt.guestname" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <label>Tap to rate: </label>
                <star-rating v-model:rating="dt.rate" :star-size="30"/>
              </div>
            </div>
            <div class="row">
              <div class="form-group form-group-textarea mb-md-0">
                <textarea class="form-control" v-model="dt.content" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div class="text-center">
            <div id="success"></div>
            <button class="btn btn-success btn-xl text-uppercase" id="sendMessageButton" :loading="submitting" type="submit">Submit</button>
          </div>
        </form>
      </div>
<!--      <div class="modal-footer">-->
<!--        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
<!--        <button type="button" class="btn btn-primary">Submit</button>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: "FeedbackCreate",
  components: { StarRating },
  data(){
    return {

      submitting: false,
      dt: {
        content: "",
        guestname: "",
        rate: null,
        response: "",
      }
    }
  },
  methods: {
    async handleSubmit(){
      try {
        this.submitting = true
        if(this.validateInput()) await this.$firebase.createFeedback(this.dt)
        this.$emit('close-modal')
      } catch (error) {
        this.$message({
          type: 'error',
          message: error
        })
      } finally {
        this.submitting = false
      }
    },
    validateInput(){
      if (this.dt.guestname.length === 0) throw 'Name is incomplete'
      if (this.dt.content.length === 0) throw 'Content is incomplete'
      return true
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>