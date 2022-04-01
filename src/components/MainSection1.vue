<template>
  <section class="section-one">
      <!--SECTION LEFT-->
      <div class="section-left">
          <h1> {{ arrSlider[activeIndex].title }} <span>{{ arrSlider[activeIndex].cursiveWorld }}</span></h1>
          <div class="subtitle"> {{ arrSlider[activeIndex].subtitle }}</div>
      </div>
        <!--SECTION RIGHT-->
      <div class="section-right">
          <img :src="require('./../assets/img/' + arrSlider[activeIndex].imgLeft)" alt="">
          <img :src="require('./../assets/img/' + arrSlider[activeIndex].imgRight)" alt="">
      </div>
  </section>
</template>

<script>
export default {
name: 'MainSection1',
data () {
    return {
        activeIndex: 0,
        arrSlider: [
            {
                title: 'Devotion as never',
                cursiveWorld: 'ends',
                subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum est rem porro pariatur sequi tempore dolor vitae vel necessitatibus?',
                imgLeft: 'h-2-slider-img-15.png',
                imgRight: 'h-2-slider-img-16.png'
            },
            {
                title: 'Devotion as never',
                cursiveWorld: 'ends',
                subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum est rem porro pariatur sequi tempore dolor vitae vel necessitatibus?',
                imgLeft: 'h-2-slider-img-11.png',
                imgRight: ''
            },
            {
                title: 'Devotion as never',
                cursiveWorld: 'ends',
                subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum est rem porro pariatur sequi tempore dolor vitae vel necessitatibus?',
                imgLeft: 'short-slider-rev-1-img-3.png',
                imgRight: ''
            },
        ]
    }
}
}
</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

.section-one {
    height: 22rem;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
}
.section-left {
    width: 30%;
}
.section-right {
    width: 50%;
}

</style>