import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'
// import colors from 'vuetify/es5/util/colors'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  // vuetify: new Vuetify(),
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'md'
  },
  theme: {
    primary: '#213e79',
    secondary: '#c0d8ed',
    accent: '#4ea3ed',
    error: '#b71c1c',
    info: '#2196f3',
    success: '#66bb6a',
    warning: '#f57f17'
  }
})

/*
 primary: colors.teal.darken1,
    accent: colors.indigo.darken1,
    info: colors.blue,
    error: colors.pink.darken2,
    success: colors.teal.lighten1,
    warning: colors.purple.darken1
*/
