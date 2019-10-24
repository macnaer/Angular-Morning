import { Component, OnInit, Output } from '@angular/core';
import  Skills  from "../models/skills.model";
import { SkillsListService} from "./skills-list.service";
@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  
  SkillsArr: Skills[];
  constructor(private skillsService: SkillsListService) { }

  onAddSkill(skill:Skills){
    this.SkillsArr.push(skill);
  }

  ngOnInit() {
    this.SkillsArr = this.skillsService.getAllSkills();
  }

}
