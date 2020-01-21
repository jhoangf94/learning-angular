import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
    selector: "[resaltar]",
})

export class ResaltarDirective implements OnInit {

    constructor(private elRef: ElementRef, private render: Renderer2) { }

    @Input("resaltar") plan: String = ""

    ngOnInit(): void {
        if (this.plan == "pagado") {
            this.render.setStyle(this.elRef.nativeElement, 'background-color', 'green')
            this.render.setStyle(this.elRef.nativeElement,'font-weight', 'bold')
        }
    }

}