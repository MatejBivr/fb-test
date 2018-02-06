import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() heading:string;
  @Input() subheading:string;
  @Input() infoUrl:string;
  @Input() linkUrl:string;
  @Input() bgc:string;
  constructor() { }

  ngOnInit() {
    console.log(this.bgc);
  }

}
