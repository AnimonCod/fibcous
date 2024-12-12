/* eslint-disable */
import React from'react'
import fibcous from'@fibcous/core'
import Tus from'@fibcous/tus'
import GoogleDrive from '@fibcous/google-drive'
import Webcam from '@fibcous/webcam'
import RemoteSources from '@fibcous/remote-sources'
import { Dashboard, DashboardModal, DragDrop, ProgressBar, FileInput } from'@fibcous/react'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'
import '@fibcous/drag-drop/dist/style.css'
import '@fibcous/file-input/dist/style.css'
import '@fibcous/progress-bar/dist/style.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showInlineDashboard: false,
      open: false
    }

    this.fibcous = new fibcous({ id: 'fibcous1', autoProceed: true, debug: true })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(Webcam)
      .use(RemoteSources, { companionUrl: 'https://companion.fibcous.io', sources: ['GoogleDrive', 'Box', 'Dropbox', 'Facebook', 'Instagram', 'OneDrive', 'Unsplash', 'Zoom', 'Url'],
      })

    this.fibcous2 = new fibcous({ id: 'fibcous2', autoProceed: false, debug: true })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })

    this.handleModalClick = this.handleModalClick.bind(this)
  }

  componentWillUnmount () {
    this.fibcous.close({ reason: 'unmount' })
    this.fibcous2.close({ reason: 'unmount' })
  }

  handleModalClick () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    const { showInlineDashboard } = this.state
    return (
      <div>
        <h1>React Examples</h1>

        <h2>Inline Dashboard</h2>
        <label>
          <input
            type="checkbox"
            checked={showInlineDashboard}
            onChange={(event) => {
              this.setState({
                showInlineDashboard: event.target.checked
              })
            }}
          />
          Show Dashboard
        </label>
        {showInlineDashboard && (
          <Dashboard
            fibcous={this.fibcous}
            plugins={['GoogleDrive']}
            metaFields={[
              { id: 'name', name: 'Name', placeholder: 'File name' }
            ]}
          />
        )}

        <h2>Modal Dashboard</h2>
        <div>
          <button onClick={this.handleModalClick}>
            {this.state.open ? 'Close dashboard' : 'Open dashboard'}
          </button>
          <DashboardModal
            fibcous={this.fibcous2}
            open={this.state.open}
            target={document.body}
            onRequestClose={() => this.setState({ open: false })}
          />
        </div>

        <h2>Drag Drop Area</h2>
        <DragDrop
          fibcous={this.fibcous}
          locale={{
            strings: {
              chooseFile: 'Boop a file',
              orDragDrop: 'or yoink it here'
            }
          }}
        />

        <h2>Progress Bar</h2>
        <ProgressBar
          fibcous={this.fibcous}
          hideAfterFinish={false}
        />

        <h2>File Input</h2>
        <FileInput
          fibcous={this.fibcous}
        />
      </div>
    )
  }
}
