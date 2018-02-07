import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  heading:string = 'MATCH HISTORY';  
  infoUrl:string = '#';
  bgc:string = 'rgba(255,255,255,0.1)';
  matches:Array<Object> = [
    {
      mode: 'FPP',
      pos: 46,
      k: 12,
      time:'14:35',
      date:'3 min ago',
      PTS:120
    },
    {
      mode: 'FPP',
      pos: 46,
      k: 12,
      time:'14:35',
      date:'3 min ago',
      PTS:120
    },
    {
      mode: 'FPP',
      pos: 46,
      k: 12,
      time:'14:35',
      date:'3 min ago',
      PTS:120
    },
    {
      mode: 'FPP',
      pos: 46,
      k: 12,
      time:'14:35',
      date:'3 min ago',
      PTS:120
    },
    {
      mode: 'FPP',
      pos: 46,
      k: 12,
      time:'14:35',
      date:'3 min ago',
      PTS:120
    },
    {
      mode: 'FPP',
      pos: 46,
      k: 12,
      time:'14:35',
      date:'3 min ago',
      PTS:120
    },
    {
      mode: 'FPP',
      pos: 46,
      k: 12,
      time:'14:35',
      date:'3 min ago',
      PTS:120
    },
    {
      mode: 'FPP',
      pos: 46,
      k: 12,
      time:'14:35',
      date:'3 min ago',
      PTS:120
    },
    {
      mode: 'FPP',
      pos: 46,
      k: 12,
      time:'14:35',
      date:'3 min ago',
      PTS:120
    }    
  ];
  constructor() { }

  ngOnInit() {
  }

}
