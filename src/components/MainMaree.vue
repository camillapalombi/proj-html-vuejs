<template>
  <main>
      <!--SECTION 1 -->
      <main-section-one />
      <!--SECTION 2 -->
      <main-section-two />

  </main>
</template>

<script>
import MainSectionOne from '@/components/MainSectionOne.vue'
import MainSectionTwo from '@/components/MainSectionTwo.vue'

export default {
name: 'MainMaree',
components: {
    MainSectionOne,
    MainSectionTwo,
}
}
</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

//Google font
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&display=swap');

</style>