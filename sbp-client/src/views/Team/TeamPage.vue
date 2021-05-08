<template>
  <section class="page-section bg-light" id="team">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 class="section-subheading text-muted">from UH-Manoa Video Game Design Course</h3>
      </div>
      <div class="row">
        <TeamMember v-for="user in team" :key="user.id" :user="user"/>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">We are passionate to produce Video Games with high quality and originality. Inside the team, everyone has a clear division of work and also tightly cooperate with each other.</p></div>
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from "@/views/Team/TeamMember";
export default {
  name: "TeamPage",
  components: { TeamMember },
  data() {
    return {
      team: [],
    }
  },
  methods: {
    async loadTeam(){
      try {
        const dt = await this.$firebase.getTeam()
        this.team = dt.docs.map(item => item.data())
      } finally {
        console.log('load')
        console.log(this.team)
      }
    }
  },
  mounted(){
    this.loadTeam();
  }
}
</script>

<style scoped>

</style>