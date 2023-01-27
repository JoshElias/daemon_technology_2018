import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  HostBinding,
  AfterContentInit,
  Renderer2,
  OnInit, 
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CursorService } from '../cursor';
import { ScrollService } from '../scroll';
import { TouchService } from '../touch';
import { Direction } from '../models';

import daemonLogo from "../../assets/img/daemon-logo.svg";


@Component({
  selector: 'home',
  styleUrls: [
    '../full-page/full-page.component.scss',
    './home.component.scss'
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  daemonLogo = daemonLogo;

  scrollSub: Subscription;
  swipeSub: Subscription;


  constructor(
    private router: Router,
    private scrollService: ScrollService,
    private touchService: TouchService) {

  }


  ngOnInit() {
    this.scrollSub = this.scrollService.onScroll.subscribe(this.onMove.bind(this));
    this.swipeSub = this.touchService.onSwipe.subscribe(this.onMove.bind(this));
  } 

  ngOnDestroy() {
    if(this.scrollSub) this.scrollSub.unsubscribe();
    if(this.swipeSub) this.swipeSub.unsubscribe();
  }

  onMove(direction: Direction): void {
    if(direction === Direction.Down || direction === Direction.Up) {
      this.router.navigate(['/nav']);
    }
  }
}
