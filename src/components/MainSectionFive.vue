<template>
  <section class="section-five">
      <!--CONTAINER SINGOLE CARD -->
      <div class="container-single-card" v-for="element in arrCalendar" :key="element.title">
            <!-- Img / titolo / autore -->
        <img class="calendar-img" :src="require('./../../public/img/' + element.image)" alt="Calendar image">
        <div class="title">{{ element.title }}</div>
        <div class="author">By {{ element.author }}</div>

        <!-- Segnalibro con data -->
        <div class="container-bookmark">
                <!--Giorno-->
            <div class="day">
                <div class="content-day">{{ element.day }}</div>
            </div>
                <!--Mese e Anno-->
            <div class="month-year">
                <font-awesome-icon icon="fa-solid fa-bookmark" />
                <div class="data">{{ element.month }}</div>
            </div>

        </div>

      </div>

        <!--Frecce in sù -->
        <div class="container-arrow">
            <a href="#">
                <img src="./../../public/img/svg-5-freccina.svg" alt="Top arrow">
            </a>
        </div>

  </section>
</template>

<script>
export default {
name: 'MainSectionFive',
data () {
    return {
        arrCalendar: [
            {
                title: 'This way, love: a detailer guide through new design',
                author: 'Emily Fields',
                image: 'h-2-blog-img-1.jpg',
                day: '07',
                month: 'MAY \'19',
            },
            {
                title: 'I try to give people a different way of looking art',
                author: 'Emily Fields',
                image: 'h-2-blog-img-2.jpg',
                day: '07',
                month: 'MAY \'19',
            },
            {
                title: 'Introduce Richard Laperrière of those amazing features',
                author: 'Emily Fields',
                image: 'h-2-blog-img-3.jpg',
                day: '07',
                month: 'MAY \'19',
            },
        ]
    }
}
}
</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

.section-five {
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

        .container-single-card {
            width: 270px;
            margin-right: 20px;
            position: relative;

                .calendar-img {
                    width: 100%;
                }
                .title {
                    font-size: 17px;
                    margin: 10px auto;
                }
                .author {
                    font-family: 'Cormorant Garamond', serif;
                    font-style: italic;
                }
        }
}
.container-bookmark {
    position: absolute;
    top: -10px;
    left: 10px;

        .day {
            width: 40px;
            height: 30px;
            background-color: $footerBackground;
            line-height: 1em;

                .content-day {
                    font-family: 'Cormorant Garamond', serif;
                    font-style: italic;
                    font-size: 35px;
                    text-align: center;
                }
        }
        .month-year {
            overflow: hidden;
            position: relative;

                .fa-bookmark {
                    font-size: 53px;
                    color: $lightPink;
                    margin-top: -25px;
                }
                .data {
                    font-size: 9px;
                    font-weight: bold;
                    position: absolute;
                    top: 3px;
                    left: 5px;
                }
        }
}
.container-arrow {
    position: absolute;
    right: 15px;
    top: 40px;
    width: 30px;
    height: 30px;
    background-color: $footerBackground;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .5s;

    img {
        width: 22px;
        transform: rotate(270deg);
        margin-left: 2px;
        margin-top: 2px;
    }
}
.container-arrow:hover {
    transform: scale(1.2);
    background-color: #85bd9e;
}

</style>