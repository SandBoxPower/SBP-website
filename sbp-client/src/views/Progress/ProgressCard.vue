<template class="ProgressCard">
  <li :class="classType">
    <div class="timeline-image"><img class="rounded-circle img-fluid" :src="item.img" alt="..." /></div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h4>{{ item.date }}</h4>
        <h4 class="subheading">{{ item.title }}</h4>
      </div>
      <div class="timeline-body"><p class="text-muted">{{ item.content }}</p></div>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProgressCard",
  props: {
    item: {default: null, type: Object}
  },
  data() {
    return {
      classType: null
    }
  },
  methods: {
    getClassType(){
      if (this.$props.item.id % 2 === 1) this.classType = ""
      else this.classType = "timeline-inverted"
    }
  },
  mounted() {
    this.getClassType()
    console.log(this.classType)
  }
}
</script>

<style lang="scss">

</style>