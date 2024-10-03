import fibcous from '@fibcous/core'
import Dashboard from '@fibcous/dashboard'
import AwsS3 from '@fibcous/aws-s3'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'

const fibcous = new fibcous({
  debug: true,
})

fibcous.use(Dashboard, {
  inline: true,
  target: 'body',
})

// No client side changes needed!
fibcous.use(AwsS3, { companionUrl: '/companion' })
