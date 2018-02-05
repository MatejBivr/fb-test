import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  challenges:Array<Object>= [
    {
      name: 'Play 3 games',
      number: 1,
      iconUrl: '../../assets/Images/Assets/Icon_Ticket_Bronze_S.svg',
      color: '#B46C39',
      progress: [true, true, false]
    },
    {
      name: 'Place top 30 three times',
      number: 1,
      iconUrl: '../../assets/Images/Assets/Icon_Ticket_Silver_S.svg',
      color: '#969EAC',
      progress: [true, false, false]
    },
    {
      name: 'Win 1 Chicken Dinner',
      number: 0,
      iconUrl: '../../assets/Images/Assets/Icon_Ticket_Gold_S.svg',
      color:'#969EAC',
      progress: [false]
    }
   ]

  constructor() { }

  ngOnInit() {
  }

}
