import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fb-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  heading:string = 'MY CHALLENGES';
  subheading:string = 'How challenges work?';
  infoUrl:string = '#';
  linkUrl:string = '#';
  bgc:string = 'linear-gradient(180deg, rgba(120,206,202,0.4) 0%, rgba(49,130,107,0.2) 100%)'
  challenges:Array<Object>= [
    {
      name: 'Play 3 games',
      number: 1,
      iconUrl: '../../assets/Images/Assets/Icon_Ticket_Bronze_S.svg',
      color: '#B46C39',
      progress: [2, 3]
    },
    {
      name: 'Place top 30 three times',
      number: 1,
      iconUrl: '../../assets/Images/Assets/Icon_Ticket_Silver_S.svg',
      color: '#969EAC',
      progress: [1, 3]
    },
    {
      name: 'Win 1 Chicken Dinner',
      number: 0,
      iconUrl: '../../assets/Images/Assets/Icon_Ticket_Gold_S.svg',
      color:'#969EAC',
      progress: [0, 1]
    }
   ]

  constructor() { }

  ngOnInit() {
  }

}
