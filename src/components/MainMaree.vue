<template>
  <main>
      <!--SECTION 1 -->
      <main-section-one />

  </main>
</template>

<script>
import MainSectionOne from '@/components/MainSectionOne.vue'

export default {
name: 'MainMaree',
components: {
    MainSectionOne,
}
}
</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&display=swap');

</style>