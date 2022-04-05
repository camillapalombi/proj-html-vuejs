<template>
  <section class="section-three">
      <div class="container-section-content">

        <!--TITOLO-->
      <h2>Working <span class="cursive-word">process</span></h2>

    <!--CONTAINER DI TUTTE LE CARDS -->
      <div class="container-all-cards">

          <!--Container singola carda -->
          <div class="card-box" v-for="card in arrCards" :key="card.title">

              <div class="img-bubble">
                  <img :class="{rotate: card.icon == 'pencil.svg'}" :src="require('./../../public/img/' + card.icon)" alt="Icons section three">
                  <img class="rotate-top" v-if="card.iconRight !== ''" :src="require('./../../public/img/' + card.iconRight)" alt="Icons section three">
              </div>
              <div class="title"> {{ card.title }}</div>
              <div class="subtitle"> {{ card.subtitle }}</div>

          </div>

      </div>
    <!--Onda rosa-->
      <img class="pink-wave" src="./../../public/img/svg-3-onda-rosa.svg" alt="">

      </div>

    <!--Freccie in sù-->
      <div class="container-arrow">
            <a href="#">
                <img src="./../../public/img/svg-5-freccina.svg" alt="Top arrow">
            </a>
      </div>

  </section>
</template>

<script>
export default {
name: 'MainSectionThree',
data () {
    return {
        arrCards: [
            {
                icon: 'lampadina.svg',
                iconRight: '',
                title: 'First theres an idea',
                subtitle: 'Lorem ipsum distinctio, exercitationem repellat facilis fugiat sunt in perferendis.'
            },
            {
                icon: 'message.svg',
                iconRight: '',
                title: 'Then we talk about',
                subtitle: 'Lorem ipsum dolor sit amet exercitationem repellat facilis fugiat sunt in perferendis.'
            },
            {
                icon: 'cloud.svg',
                iconRight: '',
                title: 'And we think about',
                subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio, perferendis.'
            },
            {
                icon: 'pencil.svg',
                iconRight: 'pen.svg',
                title: 'So we draw along',
                subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio.'
            },
        ]
    }
}
}
</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

.section-three {
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: relative;

        .container-section-content {
            height: 25rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            position: relative;

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
        }
}
.container-all-cards {
    display: flex;
    justify-content: center;
    align-items: stretch;

        .card-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 250px;
            margin-left: 15px;
            line-height: 1.5em;

                .img-bubble {
                    width: 130px;
                    height: 130px;
                    background-color: #FAF7F1;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 15px;
                    z-index: 20;

                        img {
                            width: 35px;
                        }
                        .rotate {
                            transform: rotate(315deg);
                        }
                        .rotate-top {
                            transform: rotate(135deg);
                            margin-left: -15px;
                        }
                }

                .subtitle {
                    text-align: center;
                    color: $subtitleGrey;
                    font-size: 12px;
                    margin-top: 10px;
                }
        }
}
.pink-wave {
    width: 800px;
    transform: rotate(360deg);
    position: absolute;
    top: 150px;
    left: 20;
}
.container-arrow {
    position: absolute;
    right: 10px;
    bottom: 15px;
    width: 30px;
    height: 30px;
    background-color: $footerBackground;
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
</style>