import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fb-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  @Input() progress: Array<Number>;
  @Input() color: string;
  bars:Array<Boolean> = [];
  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.progress[1]; i++){
      if (i <= this.progress[0]){
        this.bars.push(true);
      } else {
        this.bars.push(false);
      }
    }
  }

}
