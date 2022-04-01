<template>
  <div id="app">
    <!--HEADER-->
    <header-maree />

  </div>
</template>

<script>
//IMPORT
import HeaderMaree from '../src/components/HeaderMaree.vue';

//EXPORT
export default {
  name: 'App',
  components: {
    HeaderMaree,
  }
}
</script>

<style lang="scss">
//import tutti gli stili
@import './assets/style/style';
</style>
