import { Directive, ElementRef, HostListener, Renderer2, Input, 
    OnInit } from '@angular/core';
import { PivotService } from '../pivot';
import { Point } from '../models';


@Directive({
    selector: '[spotlightBackground]'
})
export class SpotlightBackgroundDirective implements OnInit {


    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    lightest = '#242424';
    darkest = '#000000'
  

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private pivotService: PivotService) {
  
    }


    ngOnInit() {
        this.drawRadialGradient();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.windowHeight = event.target.innerHeight;
        this.drawRadialGradient();
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        this.drawRadialGradient();
    }

    drawRadialGradient() {
        let background = "";
        if(!this.pivotService.transform) {
            background = `radial-gradient(circle at center, ${this.lightest} 0%, ${this.darkest} 100%)`;
        } else {
            background = `radial-gradient(circle at ${this.windowWidth / 2 + this.pivotService.transform.x}px ${this.windowHeight / 2 + this.pivotService.transform.y}px, ${this.lightest} 0%, ${this.darkest} 100%)`;
        }
        this.renderer.setStyle(this.elementRef.nativeElement, "background", background);
    }

}