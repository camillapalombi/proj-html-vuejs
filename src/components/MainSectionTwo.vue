<template>
  <section class="section-two">

      <div class="container-image" v-for="image in arrPhotos" :key="image">
          <img :src="require('./../../public/img/' + image.image)" alt="">
      </div>

      <div class="container-icons chiocciolina">
              <img src="./../../public/img/svg-4-chiocciolina-bianca.svg" alt="Chiocciolina bianca">
          </div>

          <div class="container-icons carrello">
              <img src="./../../public/img/svg-6-carrello.svg" alt="Carrello">
          </div>

  </section>
</template>

<script>
export default {
name: 'MainSectionTwo',
data () {
    return {
        arrPhotos: [
            {
                image: 'h-2-port-img-1.jpg',
            },
            {
                image: 'h-2-port-img-2.jpg',
            },
            {
                image: 'h-2-port-img-3.jpg',
            },
            {
                image: 'h-2-port-img-4.jpg',
            },
            {
                image: 'h-2-port-img-5.jpg',
            },
            {
                image: 'h-2-port-img-6.jpg',
            },
        ]
    }
}
}
</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

.section-two {
    height: 60rem;
    margin-top: 80px;
    background-color: aquamarine;
    display: flex;
    flex-wrap: wrap;
    position: relative;
}
.container-image {
    width: calc(100% / 3);
    height: 50%;

    img {
        width: 100%;
        height: 100%;
    }
}
.container-icons {
    position: absolute;
    right: 0px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
        width: 15px;
    }
}
.chiocciolina {
    top: 80px;
    background-color: #ef2853;
}
.carrello {
    top: 110px;
    background-color: white;
}
</style>