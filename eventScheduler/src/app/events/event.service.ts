import Event from "../models/event";
import Skills from '../models/skills.model';

export class EventService{
    private events: Event[] = [
        new Event(
            "Svelte",
            "Svelte description",
            "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/full/svelte-logo-vertical.png",
            [
                new Skills("Html", "Beginner"),
                new Skills("C++", "Beginner")
            ]),
        new Event(
            "Angular",
            "Angular description",
            "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png",
            [
                new Skills("C#", "Master"),
                new Skills("WinAPI", "Master"),
                new Skills("Java", "Master"),
            ]),
    ];

    getAllEvents(){
        return this.events.slice();
    }
}