import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutTitle = "About page";
  arr = [1,5,67,75,5,546,546];

  value = "";
  value2 ="";

  onNameChange(event){
    console.log(event.target.value);
    this.value = event.target.value;
  }

  onBtnNameChange(){
    this.value2 = this.value;
  }

  constructor() { 

  }

  ngOnInit() {
  }

}
