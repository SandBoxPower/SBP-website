<template>
  <div class="card w-100" id="feedbackCard">
    <div class="card-body">
      <div class="guest">
        <h5 class="card-title">{{ feedback.guestname }}: </h5>
        <star-rating :rating="feedback.rate" :read-only="true" :star-size="30"/>
        <p class="card-text">{{ feedback.content }}</p>
      </div>
      <br/>
      <div class="admin" v-if=" feedback.response.length > 0">
        <h5 class="card-title">Developer:</h5>
        <p class="card-text">{{ feedback.response }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: "FeedbackCard",
  components: { StarRating },
  props: {
    feedback: { default: null, type: Object }
  },
}
</script>

<style scoped>
#feedbackCard {
  background: #efefef;
  margin-bottom: 10px;
}
</style>