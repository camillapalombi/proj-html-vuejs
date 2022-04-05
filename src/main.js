import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faPinterestP } from '@fortawesome/free-brands-svg-icons'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faChevronLeft, faChevronRight, faBookmark, faTwitter, faPinterestP, faFacebookF, faLinkedinIn)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
