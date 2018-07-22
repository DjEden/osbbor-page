import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  size: number = 3;
  option: number = 1;
  next: number = 2;
  title = 'OSBBOR';

  changePanel(position){
    if(position > this.size){
      this.option = 1;
    }
    else{
      this.option = position;
    }    
    this.next = this.option + 1;
    if(this.next > this.size){
      this.next = 1;
    }
  }

  ngOnInit() {
    //  const secondsCounter = interval(5000);
    //  secondsCounter.subscribe(n => this.changePanel(this.option + 1));
  }

}
