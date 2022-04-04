<template>
  <div id="app">
    
    <!--HEADER-->
    <header-maree />
    <!--MAIN-->
    <main-maree />

  </div>
</template>

<script>
//IMPORT
import HeaderMaree from '@/components/HeaderMaree.vue';
import MainMaree from '@/components/MainMaree.vue';

//EXPORT
export default {
  name: 'App',
  components: {
    HeaderMaree,
    MainMaree,
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
