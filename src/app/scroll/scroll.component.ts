
import {
    Component, HostListener
} from '@angular/core';
import { ScrollService } from './scroll.service';
import { Direction } from '../models';


@Component({
    selector: 'scroll',
    styleUrls: [],
    template: ``
})
export class ScrollComponent {


    constructor(
        private scrollService: ScrollService
    ) {

    }


    @HostListener('window:mousewheel', ['$event'])
    onMouseWheelChrome(event: any) {
        this.onOtherWheelScroll(event);
    }
    @HostListener('window:DOMMouseScroll', ['$event'])
    onMouseWheelFirefox(event: any) {
        this.onFirefoxWheelScroll(event);
    }
    @HostListener('window:onmousewheel', ['$event'])
    onMouseWheelIE(event: any) {
        this.onOtherWheelScroll(event);
    }

    onFirefoxWheelScroll(e) {
        if (e.detail > 0) {
            this.scrollService.onScroll.emit(Direction.Down);
        } else {
            this.scrollService.onScroll.emit(Direction.Up);
        }
        return true;

    }

    onOtherWheelScroll(e) {
        if (e.wheelDelta < 0) {
            this.scrollService.onScroll.emit(Direction.Down);
        } else {
            this.scrollService.onScroll.emit(Direction.Up);
        }
        return true;
    }
}