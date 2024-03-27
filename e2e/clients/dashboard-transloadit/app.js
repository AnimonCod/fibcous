import { fibcous } from '@fibcous/core'
import Dashboard from '@fibcous/dashboard'
import Transloadit from '@fibcous/transloadit'

import generateSignatureIfSecret from './generateSignatureIfSecret.js'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'

// Environment variables:
// https://en.parceljs.org/env.html
const fibcous = new fibcous()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () => generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
      auth: { key: process.env.VITE_TRANSLOADIT_KEY },
      template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
    }),
  })

// Keep this here to access fibcous in tests
window.fibcous = fibcous
