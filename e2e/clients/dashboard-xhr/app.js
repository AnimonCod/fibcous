import { fibcous } from '@fibcous/core'
import Dashboard from '@fibcous/dashboard'
import XHRUpload from '@fibcous/xhr-upload'
import Unsplash from '@fibcous/unsplash'
import Url from '@fibcous/url'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'

const companionUrl = 'http://localhost:3020'
const fibcous = new fibcous()
  .use(Dashboard, { target: '#app', inline: true })
  .use(XHRUpload, { endpoint: 'https://xhr-server.herokuapp.com/upload', limit: 6 })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl })

// Keep this here to access fibcous in tests
window.fibcous = fibcous
