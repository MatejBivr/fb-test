import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './profile/info/info.component';
import { ChallengeComponent } from './profile/challenge/challenge.component';
import { CardComponent } from './common/card/card.component';
import { TicketComponent } from './common/ticket/ticket.component';
import { ProgressbarComponent } from './common/progressbar/progressbar.component';
import { LadderComponent } from './ladder/ladder.component';
import { HistoryComponent } from './history/history.component';
import { ActivityComponent } from './activity/activity.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InfoComponent,
    ChallengeComponent,
    CardComponent,
    TicketComponent,
    ProgressbarComponent,
    LadderComponent,
    HistoryComponent,
    ActivityComponent,
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
