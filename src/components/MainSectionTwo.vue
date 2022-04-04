<template>
  <section class="section-two">

      <div class="container-image" v-for="image in arrPhotos" :key="image">
          <img :src="require('./../../public/img/' + image.image)" alt="">
      </div>

        <!--CONTAINER TOP ICONS-->
        <div class="container-top-icons chiocciolina">
            <img src="./../../public/img/svg-4-chiocciolina-bianca.svg" alt="Chiocciolina bianca">
        </div>

        <div class="container-top-icons carrello">
            <img src="./../../public/img/svg-6-carrello.svg" alt="Carrello">
        </div>

        <!--CONTAINER BOTTOM ICONS-->
        <div class="container-bottom-icons highest-arrow">
            <a href="#">
                <img src="./../../public/img/svg-5-freccina.svg" alt="Top arrow">
            </a>
        </div>

        <div class="container-bottom-icons lowest-arrow">
            <a href="#">
                <img src="./../../public/img/svg-5-freccina.svg" alt="Top arrow">
            </a>
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
.container-top-icons {
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

.container-bottom-icons {
    position: absolute;
    right: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
        width: 22px;
        transform: rotate(270deg);
        margin-left: 2px;
        margin-top: 2px;
    }
}
.highest-arrow {
    bottom: 450px;
    background-color: $footerBackground;
}
.lowest-arrow {
    bottom: 20px;
    background-color: $footerBackground;
}
</style>