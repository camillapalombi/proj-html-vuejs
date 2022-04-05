<template>
  <header>

      <!-- HEADER LEFT / LOGO -->
      <div class="header-left">
          <a href="#">
              <img class="maree-logo" src="./../../public/img/logo-sidearea-1.png" alt="Marèe Logo">
          </a>
      </div>

      <!-- HEADER RIGHT / NAV -->
      <nav class="header-right">

          <ul>
              <li v-for="link in arrNavLinks" :key="link.link"> 
                  
                  <a href="#!"> {{ link.link}}</a>
                  <div class="underline-active-link"></div>
                  
              </li>

              <li>
                  <a href="#!">
                      <img class="svg-menù" src="./../../public/img/svg-1-dado.svg" alt="Menù link">
                  </a>
              </li>

          </ul>

      </nav>
  </header>
</template>

<script>
export default {
name: 'HeaderMaree',
data () {
    return {
        arrNavLinks: [
            {
                link: 'HOME'
            },
            {
                link: 'PAGES'
            },
            {
                link: 'PORTFOLIO'
            },
            {
                link: 'BLOG'
            },
            {
                link: 'SHOP'
            },
            {
                link: 'ELEMENTS'
            },
        ]
    }
}
}
</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

header {
    height: 4rem;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .header-left {
        width: 50%;

        .maree-logo {
            cursor: pointer;
            width: 100px;
        }
    }

    .header-right {
        width: 40%;

        ul {
            display: flex;
            justify-content: space-around;
            list-style: none;

            a {
                color: black;
                text-decoration: none;
                font-weight: bold;
                font-size: 12px;
            }

            li {
                position: relative;
                z-index: 20;

                &:hover .underline-active-link {
                    display: block;
                }
            }
        
            .svg-menù {
                width: 16px;
                vertical-align: middle;
            }
        }
    }
}

.underline-active-link {
    display: none;
    width: 120%;
    height: 5px;
    background-color: rgba(255, 208, 216,0.6);
    position: absolute;
    bottom: 4px;
    left: 0;
    cursor: pointer;
}
</style>