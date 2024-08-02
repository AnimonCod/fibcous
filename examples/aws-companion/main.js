import AwsS3 from '@fibcous/aws-s3'
import fibcous from '@fibcous/core'
import Dashboard from '@fibcous/dashboard'
import GoogleDrive from '@fibcous/google-drive'
import Webcam from '@fibcous/webcam'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'
import '@fibcous/webcam/dist/style.css'

const fibcous = new fibcous({
  debug: true,
  autoProceed: false,
})

fibcous.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})
fibcous.use(Webcam)
fibcous.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'Webcam'],
})
fibcous.use(AwsS3, {
  companionUrl: 'http://localhost:3020',
})
