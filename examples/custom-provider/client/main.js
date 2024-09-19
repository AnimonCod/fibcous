import fibcous from '@fibcous/core'
import GoogleDrive from '@fibcous/google-drive'
import Tus from '@fibcous/tus'
import Dashboard from '@fibcous/dashboard'
import MyCustomProvider from './MyCustomProvider.jsx'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'

const fibcous = new fibcous({
  debug: true,
})

fibcous.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})

fibcous.use(MyCustomProvider, {
  companionUrl: 'http://localhost:3020',
})

fibcous.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'MyCustomProvider'],
})

fibcous.use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
