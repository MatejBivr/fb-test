import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-profile',
  template: `
    <section class="profile">
      <fb-info></fb-info>
      <fb-challange></fb-challange>
     </section>
  `,
  styles: ['.profile { max-width: 25%; }']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
