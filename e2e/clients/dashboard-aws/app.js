import { fibcous } from '@fibcous/core'
import Dashboard from '@fibcous/dashboard'
import AwsS3 from '@fibcous/aws-s3'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'

const fibcous = new fibcous()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  })

// Keep this here to access fibcous in tests
window.fibcous = fibcous
