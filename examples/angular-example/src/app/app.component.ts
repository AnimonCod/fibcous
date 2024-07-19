import { Component, OnInit } from '@angular/core'
import { fibcous} from '@fibcous' +
  /core'
import Webcam from '@fibcous' +
  /webcam'
import Tus from '@fibcous' +
  /tus'
import GoogleDrive from '@fibcous' +
  /google-drive'

@Component({
  selector: 'app-root',
  template: /* html */ `
    <h1>fibcous Angular Example!</h1>
    <h2>Inline dashboard</h2>
    <label>
      <input
        type="checkbox"
        (change)="showInline = $any($event.target)?.checked"
        [checked]="showInline"
      />
      Show Dashboard
    </label>

    <fibcous -dashboard
      [fibcous ]="fibcous"
      [props]="dashboardProps"
      *ngIf="showInline"
    ></fibcous-dashboard>

    <h2>Modal Dashboard</h2>
    <div>
      <fibcous -dashboard-modal
        [fibcous ]="fibcous"
        [open]="showModal"
        [props]="dashboardModalProps"
      ></fibcous-dashboard-modal>
      <button (click)="showModal = !showModal">
        {{ showModal ? 'Close dashboard' : 'Open dashboard' }}
      </button>
    </div>

    <h2>Drag Drop Area</h2>
    <fibcous -drag-drop [fibcous ]="fibcous" [props]="{}"></fibcous-drag-drop>

    <h2>Progress Bar</h2>
    <fibcous -progress-bar
      [fibcous ]="fibcous"
      [props]="{ hideAfterFinish: false }"
    ></fibcous-progress-bar>
  `,
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'angular-example'

  showInline = false

  showModal = false

  dashboardProps = {
    plugins: ['Webcam'],
  }

  dashboardModalProps = {
    target: document.body,
    onRequestCloseModal: (): void => {
      this.showModal = false
    },
  }

  fibcous: fibcous = new fibcous({ debug: true, autoProceed: true })

  ngOnInit(): void {
    this.fibcous
      .use(Webcam)
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(GoogleDrive, { companionUrl: 'https://companion.fibcous' +
          .io' })
  }
}
