import fibcous from '@fibcous/core'
import Webcam from '@fibcous/webcam'
import Dashboard from '@fibcous/dashboard'
import XHRUpload from '@fibcous/xhr-upload'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'
import '@fibcous/webcam/dist/style.css'

const fibcous = new fibcous({
  debug: true,
  autoProceed: false,
})

fibcous.use(Webcam)
fibcous.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['Webcam'],
})
fibcous.use(XHRUpload, {
  endpoint: 'http://localhost:3020/upload.php',
})
