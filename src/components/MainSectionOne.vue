<template>
  <section class="section-one">

      <div @mouseover="stopSlider()" @mouseout="startSlider()" class="slider">
          
          <div class="slide-content">

            <!--SECTION LEFT-->
            <div class="section-left">

                <h1> {{ arrSlider[activeIndex].title }} <span class="cursive-world">{{ arrSlider[activeIndex].cursiveWorld }}</span></h1>
                <div class="subtitle"> {{ arrSlider[activeIndex].subtitle }}</div>
                <button class="btn-read-more">READ MORE</button>

            </div>
            
            <!--SECTION RIGHT-->
            <div class="section-right">
                <img class="skate-img" v-if="activeIndex == 0" src="./../../public/img/h-2-slider-img-15.png" alt="ragazza su pattini">
                <img class="happy-img" v-else-if="activeIndex == 1" src="./../../public/img/h-2-slider-img-11.png" alt="coppia felice che salta">
                <img class="img-alone" v-else src="./../../public/img/short-slider-rev-1-img-3.png" alt="uomo su panchina che suona">
                <img class="skate-img" v-if="activeIndex == 0" src="./../../public/img/h-2-slider-img-16.png" alt="ragazzo in skate">

                <!--IMG FOGLIOLINE SINISTRA-->
                <img class="fogliolina f-1" src="./../../public/img/short-slider-rev-1-img-2.png" alt="fogliolina">
                <img class="fogliolina f-2" src="./../../public/img/short-slider-rev-1-img-10.png" alt="fogliolina">
                <img class="fogliolina f-3" src="./../../public/img/short-slider-rev-1-img-8.png" alt="fogliolina">
                <!--IMG FOGLIOLINE DESTRA-->
                <img class="fogliolina f-4" src="./../../public/img/short-slider-rev-1-img-7.png" alt="fogliolina">
                <img class="fogliolina f-5" src="./../../public/img/short-slider-rev-1-img-6.png" alt="fogliolina">
                <img class="fogliolina f-6" src="./../../public/img/h-2-slider-img-17.png" alt="fogliolina">
                
            </div>
          </div>
      </div>

        <!--BOTTONI AVANTI/INDIETRO-->
        <button @click="previus()" class="btn-control btn-previus"> <font-awesome-icon icon="fa-solid fa-chevron-left" /> </button>
		<button @click="next()" class="btn-control btn-next"> <font-awesome-icon icon="fa-solid fa-chevron-right" /> </button>

        <!--cerchi active index-->
        <div class="circles">
			<div v-for="(element, index) in arrSlider" @click="setActiveIndex(index)" :key="index" class="circle" :class="{active: index == activeIndex}"></div>
		</div>

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
                subtitle: 'Devotion is sit amet consectetur adipisicing elit. Fugiat illum est rem porro pariatur sequi tempore dolor vitae vel necessitatibus?',
            },
            {
                title: 'Never lose',
                cursiveWorld: 'carefree',
                subtitle: ' Being carefree in a positive sense, that is, free from serious thoughts or worries..',
            },
            {
                title: 'Love for',
                cursiveWorld: 'music',
                subtitle: 'The language of music is a language that only the soul understands, but that the soul can never translate.',
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
			// salvo il valore che ritorna setInterval (è l'identificativo da passare a clearInterval per fermare le ripetizioni)
			this.intervalId = setInterval(this.next, this.interval);
		}
	},
    mounted () {
		// quando il DOM viene montato nella pagina avvio lo slider automatico
		this.startSlider();
	},
}

</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

.slider {
    width: 90%;
    height: 100%;
    position: relative;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.slide-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-one {
    height: 23rem;
    position: relative;

    //section left
        .section-left {
            width: 25%;

                h1 {
                    font-size: 50px;
                    font-weight: 200;
                    line-height: 1.2em;

                        .cursive-world {
                            font-family: 'Cormorant Garamond', serif;
                            font-size: 70px;
                            font-style: italic;
                            font-weight: bold;
                        }
                }

                .subtitle {
                    color: $subtitleGrey;
                    margin-top: 15px;
                }

                .btn-read-more {
                    border: none;
                    padding: .7em 1.9em;
                    background-color: white;
                    border: 3px solid $lightPink;
                    font-family: 'Quicksand', sans-serif;
                    font-weight: bold;
                    font-size: 12px;
                    margin-top: 35px;
                    cursor: pointer;
                    transition: all .5s;
                }
                .btn-read-more:hover {
                    background-color: $lightPink;
                    color: white;
                }
        }

//section right:
        .section-right {
            width: 40%;
            height: 100%;
            margin-left: 70px;
            position: relative;

                .img-alone {
                    width: 320px;
                }
                .happy-img {
                    width: 450px;
                }
                .skate-img {
                    width: 230px;
                }
                .fogliolina {
                    position: absolute;
                    width: 35px;
                }
                .f-1 {
                    top: -20px;
                    left: -15px;
                }
                .f-2 {
                    top: 50%;
                    left: -50px;
                    transform: rotate(270deg);
                }
                .f-3 {
                    bottom: -20px;
                    left: -30px;
                }
                .f-4 {
                    top: -10px;
                    right: 100px;
                    transform: rotate(90deg);
                }
                .f-5 {
                    top: 20%;
                    right: 50px;
                }
                .f-6 {
                    bottom: -20px;
                    right: 0;
                    width: 50px;
                }
        }
}
.btn-control {
    position: absolute;
    top: 50%;
    padding: .5em 1em;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 50%;
    background-color: $lightPink;
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
    transition: all .5s;
}
.btn-control:hover {
    transform: scale(1.3);
}
.btn-next {
    right: 20px;
}
.btn-previus {
    left: 20px;
}
.circles {
	display: flex;
	justify-content: center;
    align-items: center;
    margin-top: 30px;

        .circle {
            margin: .7rem;
            width: .4rem;
            height: .4rem;
            border-radius: 10rem;
            background-color: $lightPink;
            border-bottom: .2rem solid transparent;
            cursor: pointer;
        }
}

//cerchio :active
.circle.active {
	width: .6rem;
    height: .6rem;
    background-color: #efb09e;
}


</style>