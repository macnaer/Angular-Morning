import Skills from "../models/skills.model";

export class SkillsListService{

    private SkillsArr: Skills[] = [
        new Skills("Html", "Master"),
        new Skills("css", "Basic"),
        new Skills("C++", "Beginner")
    ];

    getAllSkills(){
        return this.SkillsArr.slice();
    }
}