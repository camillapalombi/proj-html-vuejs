<template>
  <section class="section-five">

      <div class="container-single-card" v-for="element in arrCalendar" :key="element.title">

        <img class="calendar-img" :src="require('./../../public/img/' + element.image)" alt="Calendar image">
        <div class="title">{{ element.title }}</div>
        <div class="author">{{ element.author }}</div>

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
}
.container-single-card {
    width: 240px;
    margin-right: 15px;
    .calendar-img {
        width: 100%;
    }
}

</style>