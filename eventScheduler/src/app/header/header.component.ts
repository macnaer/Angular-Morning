import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() choiceSelected = new EventEmitter<string>();

  onSelected(choice: string) {
    this.choiceSelected.emit(choice);
  }
  constructor() { }

  ngOnInit() {
  }

}
