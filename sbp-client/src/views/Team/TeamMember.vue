<template>
  <div class="col-lg-4">
    <div class="team-member">
      <img class="mx-auto rounded-circle" :src="user.img" alt="..." />
      <h4>{{ user.name }}</h4>
      <p class="text-muted">{{ user.position }}</p>
      <a class="btn btn-dark btn-social mx-2" :href="user.github" target="_blank"><i class="fab fa-github fa-lg"></i></a>
      <a class="btn btn-dark btn-social mx-2" :href="user.twitter" target="_blank"><i class="fab fa-twitter"></i></a>
      <a class="btn btn-dark btn-social mx-2" :href="user.linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: {
    user: { default: null, type: Object }
  }
}
</script>

<style scoped>

</style>