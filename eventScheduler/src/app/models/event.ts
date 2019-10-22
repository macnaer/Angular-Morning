import Skills from './skills.model';

export default class Event{
    title: string;
    description: string;
    imgPath: string;
    skills: Skills[];
    constructor(title: string, desc: string, imgPath:string, skills:Skills[]){
        this.title = title;
        this.description = desc;
        this.imgPath = imgPath;
        this.skills = skills;
    }
}