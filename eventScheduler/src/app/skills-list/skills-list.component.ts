import { Component, OnInit } from '@angular/core';
import  Skills  from "../models/skills.model";
@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  SkillsArr: Skills[] = [
    new Skills("Html", "Master"),
    new Skills("css", "Basic"),
    new Skills("C++", "Beginner")
  ];
  constructor() { }

  ngOnInit() {
  }

}
