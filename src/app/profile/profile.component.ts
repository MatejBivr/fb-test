import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-profile',
  template: `
    <section class="profile">
      <fb-info></fb-info>
      <fb-challenge></fb-challenge>
     </section>
  `,
  styles: ['.profile { max-width: 25%; }']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
