import fibcous from '@fibcous/core'
import Dashboard from '@fibcous/dashboard'
import RemoteSources from '@fibcous/remote-sources'
import Webcam from '@fibcous/webcam'
import ScreenCapture from '@fibcous/screen-capture'
import GoldenRetriever from '@fibcous/golden-retriever'
import ImageEditor from '@fibcous/image-editor'
import DropTarget from '@fibcous/drop-target'
import Audio from '@fibcous/audio'
import Compressor from '@fibcous/compressor'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'

const COMPANION_URL = 'http://companion.fibcous.io'

const fibcous = new fibcous()
  .use(Dashboard, { target: '#app', inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true })

// Keep this here to access fibcous in tests
window.fibcous = fibcous
