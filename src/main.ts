import '@oruga-ui/theme-bulma/dist/bulma.css'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'

import { createApp } from 'vue'
import App from './App.vue'

import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'

const app = createApp(App)

app.use(Oruga, {
  ...bulmaConfig,
  customIconPacks: {
    fas: {
      sizes: {
        default: '',
        small: 'fa-sm',
        medium: 'fa-lg',
        large: 'fa-2x'
      }
    }
  },
  iconPack: 'fas'
})
app.mount('#app')
