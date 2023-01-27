import {
  Injector, OnInit, OnDestroy
} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription  } from 'rxjs/Subscription';
import { ScrollService } from '../scroll';
import { TouchService } from '../touch';
import { Direction } from '../models';



export abstract class ServiceComponent implements OnInit, OnDestroy {

  protected scrollService: ScrollService;
  protected touchService: TouchService;
  protected router: Router;
  protected location: Location;

  protected scrollSub: Subscription;
  protected swipeSub: Subscription;

  protected abstract onMove(direction: Direction): void;
  activeSectionIndex = 0;


  constructor(
    protected injector: Injector) {
    this.router = this.injector.get(Router);
    this.location = this.injector.get(Location);
    this.scrollService = this.injector.get(ScrollService);
    this.touchService = this.injector.get(TouchService);
  }

  ngOnInit() {
    this.scrollSub = this.scrollService.onScroll.subscribe(this.onMove.bind(this));
    this.swipeSub = this.touchService.onSwipe.subscribe(this.onMove.bind(this));
  }

  ngOnDestroy() {
    if(this.scrollSub) this.scrollSub.unsubscribe();
    if(this.swipeSub) this.swipeSub.unsubscribe();
  }

  protected shouldScroll(): boolean {
    if (!this.scrollService.shouldScroll) {
      return false;
    }

    this.scrollService.shouldScroll = false;
    setTimeout(() => {
      this.scrollService.shouldScroll = true;
    }, 300)
    return true;
  }
  
  navigate(route) {
    let that = this;
    this.router.navigate([route], { replaceUrl: true })
  }
}