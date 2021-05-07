<template>
  <div id="app">
    <NavBar />
    <HomePage />
    <Services />
    <DevelopLogs />
    <AboutPage />
    <TeamPage />
  </div>
</template>

<script>
import { swap } from './js/scripts';

import NavBar from "@/components/NavBar";
import Services from "@/views/Service/Services";
import DevelopLogs from "@/views/Log/DevelopLogs";
import HomePage from "@/views/Home/HomePage";
import AboutPage from "@/views/Progress/ProgressPage";
import TeamPage from "@/views/Team/TeamPage";
export default {
  name: 'App',
  components: {
    NavBar, HomePage, Services, DevelopLogs, AboutPage, TeamPage
  },
  data() {
    return {
      logDetailTrigger: false,
    }
  },
  mounted() {
    swap()
  }
}
</script>

<style lang="scss">
@import 'css/styles.css';
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700');
//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//  margin-top: 60px;
//
//}

</style>
