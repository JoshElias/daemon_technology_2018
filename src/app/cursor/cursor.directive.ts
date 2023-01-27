import { Directive, HostListener } from '@angular/core';
import { CursorService } from './cursor.service';


@Directive({
    selector: '[cursor]'
})
export class CursorDirective {

    constructor(
        private cursorService: CursorService
    ) {
        
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.cursorService.hovering.next(true);
    }
    
    @HostListener('mouseleave')
    onMouseLeave() {
        this.cursorService.hovering.next(false);
    }
}
