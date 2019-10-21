import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:"[appDrop]"
})

export class Dropdown{
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        console.log("Works!!!!!");
    }
}