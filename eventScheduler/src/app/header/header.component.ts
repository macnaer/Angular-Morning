import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  onSaveEvents(){
    this.apiService.saveEvents();
  }
  onLoadEvents(){
    this.apiService.loadEvents();
  }
  ngOnInit() {
  }

}
