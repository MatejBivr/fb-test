import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-profile',
  template: `
    <section class="profile">
      <fb-info></fb-info>
      <fb-challenge></fb-challenge>
     </section>
  `,
  styles: [':host {grid-row: span 2;} .profile{z-index:1; margin-left:10px;}']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
