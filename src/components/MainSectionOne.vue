<template>
  <section class="section-one">

      <div @mouseover="stopSlider()" @mouseout="startSlider()" class="slider">
          
          <div class="slide-content">

              <!--SECTION LEFT-->
            <div class="section-left">
                <h1> {{ arrSlider[activeIndex].title }} <span class="cursive-world">{{ arrSlider[activeIndex].cursiveWorld }}</span></h1>
                <div class="subtitle"> {{ arrSlider[activeIndex].subtitle }}</div>
            </div>
                <!--SECTION RIGHT-->
            <div class="section-right">
                <img class="big-img" v-if="activeIndex == 0" src="./../../public/img/h-2-slider-img-15.png" alt="">
                <img class="img-alone" v-else-if="activeIndex == 1" src="./../../public/img/h-2-slider-img-11.png" alt="">
                <img class="img-alone" v-else src="./../../public/img/short-slider-rev-1-img-3.png" alt="">

                <img class="big-img" v-if="activeIndex == 0" src="./../../public/img/h-2-slider-img-16.png" alt="">
                <img class="big-img" v-else src="" alt="">
            </div>

          </div>
        
                
      
      

      </div>

        <button @click="previus()" class="btn-control btn-previus">&lt;</button>
		<button @click="next()" class="btn-control btn-next"> &GT; </button>

  </section>
</template>

<script>
export default {
name: 'MainSectionOne',
data () {
    return {
        activeIndex: 0,
        interval: 4000,
		intervalId: null,
        arrSlider: [
            {
                title: 'Devotion that never',
                cursiveWorld: 'ends',
                subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum est rem porro pariatur sequi tempore dolor vitae vel necessitatibus?',
            },
            {
                title: 'Devotion all never',
                cursiveWorld: 'ciao',
                subtitle: 'Lorem  dolor sit amet consectetur adipisicing elit. Fugiat illum est rem porro pariatur sequi tempore dolor vitae vel necessitatibus?',
                imgLeft: './../../public/img/h-2-slider-img-11.png',
                imgRight: ''
            },
            {
                title: 'Devotion soul never',
                cursiveWorld: 'arrivederci',
                subtitle: 'Lorem ipsum sit amet consectetur adipisicing elit. Fugiat illum est rem porro pariatur sequi tempore dolor vitae vel necessitatibus?',
            },
        ]
    }
},
methods: {
		next() {
			if (this.activeIndex == this.arrSlider.length - 1) {
				this.activeIndex = 0;
			} else {
				this.activeIndex++;
			}
		},
		previus() {
			if (this.activeIndex == 0) {
				this.activeIndex = this.arrSlider.length - 1;
			} else {
				this.activeIndex--;
			}
		},
		setActiveIndex(index) {
			this.activeIndex = index;
		},
		stopSlider() {
			clearInterval(this.intervalId);
		},
		startSlider() {
			// salvare il valore che ritorna setInterval è importante perchè è l'identificativo da passare a clearInterval per fermare le ripetizioni
			this.intervalId = setInterval(this.next, this.interval);
		}
	},
    mounted() {
		// quando il DOM viene montato nella pagina avviamo lo slider automatico
		this.startSlider();
	},
}

</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

.section-one {
    height: 23rem;
    position: relative;
}
.section-left {
    width: 25%;
}
.section-right {
    width: 40%;
}
.big-img {
    width: 230px;
}
h1 {
    font-size: 50px;
    font-weight: 200;
}
.cursive-world {
    font-family: 'Cormorant Garamond', serif;
    font-size: 70px;
    font-style: italic;
    font-weight: bold;
}
.slider {
    width: 90%;
    height: 100%;
    position: relative;
    margin: auto;
}
.white-bg {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
.slide-content {
    position: absolute;
    top: 10px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-control {
    position: absolute;
    top: 50%;
    padding: .5em .7em;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 50%;
    background-color: $lightPink;
    cursor: pointer;
}
.btn-next {
    right: 20px;
}
.btn-previus {
    left: 20px;
}
.img-alone {
    width: 400px;
}


</style>