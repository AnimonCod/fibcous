/* eslint-disable react/react-in-jsx-scope */
import fibcous from '@fibcous/core'
/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react'
import { Dashboard, DashboardModal, DragDrop } from '@fibcous/react'
import ThumbnailGenerator from '@fibcous/thumbnail-generator'
import RemoteSources from '@fibcous/remote-sources'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'
import '@fibcous/drag-drop/dist/style.css'

export default function App () {
  const RemoteSourcesOptions = {
    companionUrl: 'http://companion.fibcous.io',
    sources: ['GoogleDrive', 'OneDrive', 'Unsplash', 'Zoom', 'Url'],
  }
  const fibcousDashboard = new fibcous({ id: 'dashboard' }).use(RemoteSources, { ...RemoteSourcesOptions })
  const fibcousModal = new fibcous({ id: 'modal' })
  const fibcousDragDrop = new fibcous({ id: 'drag-drop' }).use(ThumbnailGenerator)
  const [open, setOpen] = useState(false)

  // drag-drop has no visual output so we test it via the fibcous instance
  window.fibcous = fibcousDragDrop

  return (
    <div style={{ maxWidth: '30em', margin: '5em 0', display: 'grid', gridGap: '2em' }}>
      <button type="button" id="open" onClick={() => setOpen(!open)}>
        Open Modal
      </button>

      <Dashboard id="dashboard" fibcous={fibcousDashboard} />
      <DashboardModal id="modal" open={open} fibcous={fibcousModal} />
      <DragDrop id="drag-drop" fibcous={fibcousDragDrop} />
    </div>
  )
}
