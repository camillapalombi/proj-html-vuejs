<template>
  <main>

      <!--SECTION 1 -->
      <main-section-one />
      <!--SECTION 2 -->
      <main-section-two />
      <!--SECTION 3 -->
      <main-section-three />

  </main>
</template>

<script>
import MainSectionOne from '@/components/MainSectionOne.vue'
import MainSectionTwo from '@/components/MainSectionTwo.vue'
import MainSectionThree from '@/components/MainSectionThree.vue'

export default {
name: 'MainMaree',
components: {
    MainSectionOne,
    MainSectionTwo,
    MainSectionThree
}
}
</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

//Google font
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,700&display=swap');

</style>