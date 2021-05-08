<template>
  <section class="page-section" id="contact">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Feedback</h2>
        <h3 class="section-subheading text-muted">You can directly communicate with the development team at here! Please feel free to leave you valuable advice and feedback.</h3>
      </div>

      <div class="card" id="discussion-section">
        <div class="card-header">
          Ratings & Reviews
        </div>
        <div class="card-body">
          <div class="row" v-for="item in feedbacks" :key="item" >
            <FeedbackCard :feedback="item"/>
          </div>
        </div>
      </div>

      <!-- Button trigger modal -->
      <div class="d-grid gap-2 col-6 mx-auto" id="write-btn">
        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Write some feedback
        </button>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <FeedbackCreate v-on:close-modal="closeModal"/>
      </div>

    </div>
  </section>
</template>

<script>
import FeedbackCard from "@/views/Feedback/FeedbackCard";
import FeedbackCreate from "@/views/Feedback/FeedbackCreate";
import { Modal } from 'bootstrap'
export default {
  name: "Feedback",
  components: { FeedbackCard, FeedbackCreate },
  data() {
    return {
      feedbacks: [],
      modal: null
    }
  },
  methods: {
    closeModal() {
      this.modal.hide()
      this.$message({
        type: 'success',
        message: 'Success! Thank you for your feedback.'
      })
    },
    async loadFeedback(){
      try {
        const dt = await this.$firebase.getFeedback()
        this.feedbacks = dt.docs.map(item => item.data())
      } finally {
        console.log(this.feedbacks)
      }
    }
  },
  mounted() {
    this.loadFeedback()
    //this.modal = new Modal(this.$refs.exampleModal)
    this.modal = new Modal(document.getElementById('staticBackdrop'))
  }
}
</script>

<style lang="scss">
#discussion-section {
  overflow: scroll;
  height: 80vh;
}
#write-btn {
  margin-top: 20px;
}
</style>