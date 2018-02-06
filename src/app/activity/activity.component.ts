import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  heading:string = 'ACTIVITY FEED';
  bgc:string = 'rgba(255,255,255,0.1)';
  activities:Array<Object> = [
    {
      name: 'Elkynator',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_1.png',
      activityTitle:'won bronze tickets',
      activityIcon: './assets/Images/Assets/Icon_Ticket_Bronze_S.svg',
      iconFormat: 'svg'
    },
    {
      name: 'A Lah Kebab',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_2.png',
      activityTitle:'won chicken dinner',
      activityIcon: './assets/Images/Assets/IMG_ChickenDinner.png',
      iconFormat: 'png'
    }
    {
      name: 'Elkynator',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_3.png',
      activityTitle:'placed 10th on FPP',
      activityIcon: './assets/Images/Assets/Icn_Ladder.png',
      iconFormat: 'png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
