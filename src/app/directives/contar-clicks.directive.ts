import { Directive, HostListener, HostBinding } from "@angular/core";


@Directive({
    selector: 'li[contar-clicks]'
})

export class ContarClicksDirective {

    clickNum: number = 0

    @HostBinding('style.opacity') opacity: number = .1

    @HostListener('click', ['$event.target']) onClick(btn) {
        this.clickNum++
        this.opacity += .1
        console.log(btn, 'Numero de clicks', this.clickNum)
    }
}