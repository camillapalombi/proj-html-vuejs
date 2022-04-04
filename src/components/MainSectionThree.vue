<template>
  <section class="section-three">
      <div class="container-section-content">
      <h2>Working <span class="cursive-world">process</span> </h2>

      <div class="container-all-cards">
          <div class="card-box" v-for="card in arrCards" :key="card.title">
              <div class="img-bubble">
                  <img :class="{rotate: card.icon == 'pencil.svg'}" :src="require('./../../public/img/' + card.icon)" alt="Icons section three">

                  <img class="rotate-top" v-if="card.iconRight !== ''" :src="require('./../../public/img/' + card.iconRight)" alt="Icons section three">
              </div>

              <div class="title"> {{ card.title }}</div>

              <div class="subtitle"> {{ card.subtitle }}</div>
          </div>
      </div>
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
                subtitle: 'Lorem ipsum dolor sit amet exercitationem repellat facilis fugiat sunt in perferendis dolor.'
            },
            {
                icon: 'cloud.svg',
                iconRight: '',
                title: 'And we think about',
                subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio, perferendis dolor.'
            },
            {
                icon: 'pencil.svg',
                iconRight: 'pen.svg',
                title: 'So we draw along',
                subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio, exercitationem.'
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
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-section-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.cursive-world {
    font-family: 'Cormorant Garamond', serif;
    font-size: 60px;
    font-style: italic;
    font-weight: 900;
}
h2 {
    font-size: 40px;
    font-weight: 100;
}
img {
    width: 50px;
}
.container-all-cards {
    display: flex;
    justify-content: center;
    align-items: center;
}
.card-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
}
.subtitle {
    text-align: center;
    color: $subtitleGrey;
    font-size: 13px;
}
.rotate {
    transform: rotate(315deg);
}
.rotate-top {
    transform: rotate(135deg);
}

</style>