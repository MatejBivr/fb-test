import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './profile/info/info.component';
import { ChallangeComponent } from './profile/challange/challange.component';
import { CardComponent } from './common/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InfoComponent,
    ChallangeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
