import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.scss']
})
export class LadderComponent implements OnInit {
  heading:string = 'LADDER ROYALE';
  subheading:string = 'How ladder works?';
  infoUrl:string = '#';
  linkUrl:string = '#';
  bgc:string = 'linear-gradient(180deg, rgba(162,122,180,0.4) 0%, rgba(62,85,144,0.2) 100%)';
  progressColor:string = '#72BB1C';
  players:Array<Object> = [
    {
      name: 'Elkynator',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_1.png',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'A Lah Kebab',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_2.png',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'Elkynator',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_3.png',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'A Lah Kebab',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_1.png',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'A Lah Kebab',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_2.png',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'A Lah Kebab',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_2.png',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'A Lah Kebab',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_2.png',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'A Lah Kebab',
      avatarUrl: './assets/Images/Assets/IMG_Avatar_2.png',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    }
  ];

  selectedPlayer:Object;
  constructor() { }

  ngOnInit() {
    this.selectedPlayer = this.players[0];
  }

}
