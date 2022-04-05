<template>
  <footer>
      <div class="container-footer-contents">

          <div class="footer-left">
              <a href="#">
                  <img class="maree-logo" src="./../../public/img/logo-sidearea-1.png" alt="Marèe Logo">
              </a>
              <div>Let's get creative</div>
          </div>

          <div class="footer-center">
              <div>maree.quode@gmail.com</div>
              <div>+44697 843 521</div>
          </div>

          <div class="footer-center2">
              <div>Avenue d'Auderghem 10</div>
              <div>1040 Brussels, Belgium</div>
          </div>

          <div class="footer-right">
              <div>Stay in touch whit us</div>
              <div class="social-icons">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                  <font-awesome-icon icon="fa-brands fa-pinterest-p" />
                  <font-awesome-icon icon="fa-brands fa-facebook-f" />
                  <font-awesome-icon icon="fa-brands fa-linkedin-in" />
              </div>
          </div>

      </div>

  </footer>
</template>

<script>
export default {
name: 'FooterMaree'
}
</script>

<style scoped lang="scss">
//import variabili colori
@import '../assets/style/partials/variables';

footer {
    background-color: $footerBackground;
    height: 11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
.container-footer-contents {
    width: 54%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 40px;
    line-height: 2em;
}
.maree-logo {
    width: 100px;
}
.social-icons {
    width: 120px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.fa-twitter, .fa-pinterest-p, .fa-facebook-f, .fa-linkedin-in {
    cursor: pointer;
}



</style>