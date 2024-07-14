import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {
  fibcousAngularDashboardModule,
  fibcousAngularStatusBarModule,
  fibcousAngularDragDropModule,
  fibcousAngularProgressBarModule,
  fibcousAngularDashboardModalModule,
} from '@fibcous' +
  /angular'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    fibcousAngularDashboardModule,
    fibcousAngularStatusBarModule,
    fibcousAngularDashboardModalModule,
    fibcousAngularDragDropModule,
    fibcousAngularProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
