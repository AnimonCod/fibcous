import { fibcous } from '@fibcous/core'
import Dashboard from '@fibcous/dashboard'
import Tus from '@fibcous/tus'
import Unsplash from '@fibcous/unsplash'
import Url from '@fibcous/url'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'

function onShouldRetry (err, retryAttempt, options, next) {
  if (err?.originalResponse?.getStatus() === 418) {
    return true
  }
  return next(err)
}

const companionUrl = 'http://localhost:3020'
const fibcous = new fibcous()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files', onShouldRetry })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl })

// Keep this here to access fibcous in tests
window.fibcous = fibcous
