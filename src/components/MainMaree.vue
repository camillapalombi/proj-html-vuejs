<template>
  <main>

      <!--SECTION 1 -->
      <main-section-one />
      <!--SECTION 2 -->
      <main-section-two />
      <!--SECTION 3 -->
      <main-section-three />

      <!--SECTION 4 -->
      <section class="section-four">
        <h2>Want to work with us? Send us <span class="cursive-word">a message!</span> </h2>
        <div class="subtitle"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sequi iure a aperiam magni totam obcaecati nihil in iste, officiis ipsum minima ad incidunt, cum temporibus magnam vitae provident veritatis.</div>
        <button class="btn-contact"> CONTACT
          <div class="bubble-hover"></div> <!--hover sul bottone (bolla) -->
        </button>

              <!--piccole immagini di background-->
        <img class="clouds cloud-1" src="./../../public/img/cloud-green.svg" alt="Cloud">
        <img class="clouds cloud-2" src="./../../public/img/cloud-rosino.svg" alt="Cloud">
        <img class="clouds cloud-3" src="./../../public/img/cloud-green.svg" alt="Cloud">
        <img class="clouds cloud-4" src="./../../public/img/cloud-green-2.svg" alt="Cloud">
        <img class="clouds cloud-5" src="./../../public/img/cloud-rosino.svg" alt="Cloud">
        <img class="clouds cloud-6" src="./../../public/img/cloud-rosino.svg" alt="Cloud">

        <img class="xmarks xmark-1" src="./../../public/img/crocettine.png" alt="Crocettine">
        <img class="xmarks xmark-2" src="./../../public/img/crocettine.png" alt="Crocettine">
        <img class="xmarks xmark-3" src="./../../public/img/crocettine.png" alt="Crocettine">
        <img class="xmarks xmark-4" src="./../../public/img/crocettine.png" alt="Crocettine">
        <img class="xmarks xmark-5" src="./../../public/img/crocettine.png" alt="Crocettine">

        <img class="foglioline-1" src="./../../public/img/short-slider-rev-1-img-2.png" alt="Foglioline">
        <img class="foglioline-2" src="./../../public/img/short-slider-rev-1-img-6.png" alt="Foglioline">
        
      </section>

      <!--SECTION 5 -->
      <main-section-five />

  </main>
</template>

<script>
import MainSectionOne from './MainSectionOne.vue'
import MainSectionTwo from './MainSectionTwo.vue'
import MainSectionThree from './MainSectionThree.vue'
import MainSectionFive from './MainSectionFive.vue'

export default {
name: 'MainMaree',
components: {
    MainSectionOne,
    MainSectionTwo,
    MainSectionThree,
    MainSectionFive
}
}
</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

//Google font
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,700&display=swap');

.section-four {
  height: 23rem;
  background-color: $section4Background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

    h2 {
      font-size: 40px;
      font-weight: 100;

      .cursive-word {
        font-family: 'Cormorant Garamond', serif;
        font-size: 60px;
        font-style: italic;
        font-weight: 900;
      }
    }

    .subtitle {
      width: 1000px;
      color: $subtitleGrey;
      text-align: center;
      margin-top: 20px;
    }

    .btn-contact {
      border: none;
      background-color: $footerBackground;
      cursor: pointer;
      font-family: 'Quicksand', sans-serif;
      padding: .9em 3.6em;
      font-size: 12px;
      font-weight: bold;
      margin-top: 25px;
      position: relative;
      transition: all 1s;

        .bubble-hover {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #f5d8ca;
          position: absolute;
          bottom: 0;
          right: 15px;
          display: none;
        }
    }
}

//effetto di hover
.btn-contact:hover {
  color: white;
  background-color: #e1c0b0;
}
.btn-contact:hover .bubble-hover {
  display: block;
}

//posizionamento delle piccole imgs di background!
.clouds {
  width: 500px;
  position: absolute;
  transform: rotate(180deg);
  overflow: hidden;
}
.cloud-1 {
  top: -330px;
  left: -120px;
}
.cloud-2 {
  top: -360px;
  left: 150px;
  width: 480px;
}
.cloud-3 {
  top: -330px;
  right: -120px;
}
.cloud-4 {
  top: -360px;
  right: 110px;
  width: 480px;
}
.cloud-5 {
  bottom: -420px;
  right: -60px;
  transform: rotate(280deg);
}
.cloud-6 {
  bottom: -470px;
  left: 150px;
  transform: rotate(90deg);
}
.xmarks {
  position: absolute;
  width: 80px;
}
.xmark-1 {
  top: -60px;
  left: 480px;
  transform: rotate(90deg);
}
.xmark-2 {
  top: 70px;
  right: 0;
}
.xmark-3 {
  top: 90px;
  right: 30px;
}
.xmark-4 {
  bottom: -50px;
  right: 200px;
  transform: rotate(90deg);
}
.xmark-5 {
  bottom: 0;
  left: 0;
}
.foglioline-1 {
  width: 40px;
  position: absolute;
  top: 80px;
  right: 200px;
  filter: opacity(0.4);
}
.foglioline-2 {
  width: 40px;
  position: absolute;
  bottom: 10px;
  left: 120px;
  filter: opacity(0.4);
}
</style>