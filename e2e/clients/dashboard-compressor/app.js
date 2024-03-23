import fibcous from '@fibcous/core'
import Dashboard from '@fibcous/dashboard'
import Compressor from '@fibcous/compressor'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'

const fibcous = new fibcous()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: 'image/webp',
  })

// Keep this here to access fibcous in tests
window.fibcous = fibcous
