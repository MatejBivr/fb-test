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
  progressColor:string = 'green';
  players:Array<Object> = [
    {
      name: 'Elkynator',
      avatarUrl: '#',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'Elkynator',
      avatarUrl: '#',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'Elkynator',
      avatarUrl: '#',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'Elkynator',
      avatarUrl: '#',
      kills: 24,
      wins: 87,
      points: 642,
      played: [7, 10]
    },
    {
      name: 'Elkynator',
      avatarUrl: '#',
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
