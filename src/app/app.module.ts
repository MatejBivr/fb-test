import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './profile/info/info.component';
import { ChallangeComponent } from './profile/challange/challange.component';
import { CardComponent } from './common/card/card.component';
import { TicketComponent } from './common/ticket/ticket.component';
import { ProgressbarComponent } from './common/progressbar/progressbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InfoComponent,
    ChallangeComponent,
    CardComponent,
    TicketComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
