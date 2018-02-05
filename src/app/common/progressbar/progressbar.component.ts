import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fb-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  @Input() progress: Array<Boolean>;
  @Input() color: string;
  constructor() { }

  ngOnInit() {
    
  }

}
