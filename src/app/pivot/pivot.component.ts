
import { Component, Input, HostListener, AfterContentInit, ElementRef, 
  Renderer2, EventEmitter, Output } from '@angular/core';
import { PivotService } from './pivot.service';
import { Point } from '../models';

@Component({
  selector: 'pivot',
  styleUrls: [
    './pivot.component.scss'
  ],
  templateUrl: './pivot.component.html'
})
export class PivotComponent {

  @Input()
  doesPivot = true;

  @Output()
  onTransform = new EventEmitter<Point>();

  windowWidth = 0;
  windowHeight = 0;
  width = 0;
  height = 0;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private pivotService: PivotService) {

  }

  // Handle dynamic background
  ngAfterContentInit() {
    this.width = this.elementRef.nativeElement.clientWidth;
    this.height = this.elementRef.nativeElement.clientHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.windowHeight = event.target.innerHeight;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.transformFeature(event);
  }

  transformFeature(event: MouseEvent) {
    if(!this.doesPivot) {
      return;
    }

    let featureCenterX = this.elementRef.nativeElement.offsetLeft - this.width / 2;
    let featureCenterY = this.elementRef.nativeElement.offsetTop - this.height / 2;
    this.pivotService.transform = new Point((featureCenterX - event.clientX) / 100, (featureCenterY - event.clientY) / 100);
    let transformString = `translate(${this.pivotService.transform.x}px, ${this.pivotService.transform.y}px)`
    this.renderer.setStyle(this.elementRef.nativeElement, "transform", transformString);
    this.onTransform.emit(this.pivotService.transform);
  }
}