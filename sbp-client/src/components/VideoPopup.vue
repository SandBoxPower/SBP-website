<template>
  <div id="light">
    <a class="boxclose" id="boxclose" v-on:click="lightbox_close"></a>
    <video id="VisaChipCardVideo" width="900" controls>
      <source src="../assets/video/2min-video.mp4">
    </video>
  </div>
  <div id="fade" v-on:click="lightbox_close"></div>
</template>

<script>
export default {
  name: "VideoPopup",
  methods: {
    lightbox_close() {
      const lightBoxVideo = document.getElementById("VisaChipCardVideo");
      document.getElementById('light').style.display = 'none';
      document.getElementById('fade').style.display = 'none';
      lightBoxVideo.pause();
    }
  },
}
</script>

<style lang="scss" scoped>
#fade {
  display: none;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1001;
  -moz-opacity: 0.8;
  opacity: .80;
  filter: alpha(opacity=80);
}
#light {
  display: none;
  position:absolute;
  top: 50%;
  left: 50%;
  max-width: 900px;
  max-height: 360px;
  margin-left: -450px;
  margin-top: -180px;
  background: #FFF;
  z-index: 1002;
  overflow: visible;
}
#boxclose {
  float: right;
  cursor: pointer;
  color: #fff;
  border: 1px solid #AEAEAE;
  border-radius: 3px;
  background: #222222;
  font-size: 31px;
  font-weight: bold;
  display: inline-block;
  line-height: 0px;
  padding: 11px 3px;
  position: absolute;
  right: 2px;
  top: 2px;
  z-index: 1002;
  opacity: 0.9;
}

.boxclose:before {
  content: "×";
}
</style>