<template>
  <div id="app">
    
    <!--HEADER-->
    <header-maree />
    <!--MAIN-->
    <main-maree />
    <!--FOOTER-->
    <footer-maree />

  </div>
</template>

<script>
//IMPORT
import HeaderMaree from './components/HeaderMaree.vue';
import MainMaree from './components/MainMaree.vue';
import FooterMaree from './components/FooterMaree.vue';

//EXPORT
export default {
  name: 'App',
  components: {
    HeaderMaree,
    MainMaree,
    FooterMaree
  }
}
</script>

<style lang="scss">
//import tutti gli stili
@import './assets/style/style';

html {
  scroll-behavior: smooth;
}
</style>
