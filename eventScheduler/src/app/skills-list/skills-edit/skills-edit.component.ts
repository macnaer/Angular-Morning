import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import Skills from "../../models/skills.model";

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss']
})
export class SkillsEditComponent implements OnInit {

  @Output() skillsAdded = new EventEmitter<Skills>();
  constructor() { }
  ngOnInit() {
  }
  onAddSkill(form: NgForm){
    const value = form.value;
    console.log(form.value);
    const newSkills = new Skills(value.skillName, value.level);
    this.skillsAdded.emit(newSkills);
  }
}
