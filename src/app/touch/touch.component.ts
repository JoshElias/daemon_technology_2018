
import {
    Component, HostListener
} from '@angular/core';
import { TouchService } from './touch.service';
import { Direction } from '../models';


@Component({
    selector: 'touch',
    styleUrls: [],
    template: ``
})
export class TouchComponent {

    xDown = 0;
    yDown = 0;

    constructor(
        private touchService: TouchService
    ) {

    }


    @HostListener('document:touchstart', ['$event'])
    onTouchStart(event: any) {
        this.xDown = event.touches[0].clientX;
        this.yDown = event.touches[0].clientY;
    }

    @HostListener('document:touchmove', ['$event'])
    onTouchMove(event: any) {
        if(!this.xDown || !this.yDown) {
            return;
        }

        let xUp = event.touches[0].clientX;
        let yUp = event.touches[0].clientY;
    
        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;

        if(Math.abs(xDiff) > Math.abs(yDiff)) {
            if(xDiff > 0) {
                this.touchService.onSwipe.emit(Direction.Left);
            } else {
                this.touchService.onSwipe.emit(Direction.Right);
            }
        } else {
            if(yDiff > 0) {
                this.touchService.onSwipe.emit(Direction.Up);
            } else {
                this.touchService.onSwipe.emit(Direction.Down);
            }
        }

        this.xDown = 0;
        this.yDown = 0;
    }
}