import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import Skills from "../../models/skills.model";

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss']
})
export class SkillsEditComponent implements OnInit {
  @ViewChild('skillInput', { static: false }) skillInputRef: ElementRef;
  @ViewChild('levelInput', { static: false }) levelInputRef: ElementRef;
  @Output() skillsAdded = new EventEmitter<Skills>();
  constructor() { }
  ngOnInit() {
  }
  onAddSkill(){
    const newSkill = this.skillInputRef.nativeElement.value;
    const newLevel = this.levelInputRef.nativeElement.value;
    const newSkills = new Skills(newSkill, newLevel);
    this.skillsAdded.emit(newSkills);
  }
}
