export default class Event{
    title: string;
    description: string;
    imgPath: string;
    constructor(title: string, desc: string, imgPath:string){
        this.title = title;
        this.description = desc;
        this.imgPath = imgPath;
    }
}