import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message: string;
  constructor() { 
    setInterval(()=>{
      var date = new Date();
      this.message = date.toDateString() + " "+ date.toTimeString();
    },1000);    
  }

  ngOnInit() {
  }

}
