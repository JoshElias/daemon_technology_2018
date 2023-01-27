import {
    Component,
    HostListener,
    Renderer2,
    ElementRef,
    HostBinding,
    OnInit,
    OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CursorService } from './cursor.service';
import { AppService } from '../app.service';


@Component({
    selector: 'cursor',
    styleUrls: ['./cursor.component.scss'],
    templateUrl: './cursor.component.html'
})
export class CursorComponent implements OnInit, OnDestroy {

    @HostBinding('style.top.px')
    elementTop = 0;
    @HostBinding('style.left.px')
    elementLeft = 0;

    hoveringSub: Subscription

    normalCircleDiameter = 20;
    hoveredCircleDiameter = 40;
    circleDiameter = this.normalCircleDiameter;
    isHovering = false;
    cursorTimer;
    cursorDisplay = 'block';


    constructor(
        private renderer: Renderer2,
        private elementRef: ElementRef,
        public cursorService: CursorService,
        private appService: AppService) {

    }


    ngOnInit() {
        this.hoveringSub = this.cursorService.hovering.subscribe(this.onHover.bind(this));
        this.cursorDisplay = (this.appService.isMobile) ? 'none' : 'block';
    }

    ngOnDestroy() {
        if (this.hoveringSub) this.hoveringSub.unsubscribe();
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        let _event = event;
        this.cursorTimer = setTimeout(() => {
            this.updateCursor(_event);
        }, 1);
    }

    updateCursor(event: MouseEvent) {
        this.elementLeft = event.clientX - this.circleDiameter / 2;
        this.elementTop = event.clientY - this.circleDiameter / 2;
    }

    onHover(isHovering: boolean) {
        this.isHovering = isHovering;
            if (!isHovering) {
                this.circleDiameter = this.normalCircleDiameter;
            } else {

                this.circleDiameter = this.hoveredCircleDiameter;
            } 
    }
}