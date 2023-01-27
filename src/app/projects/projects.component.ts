import {
  Component, ViewChildren, ElementRef, AfterViewInit, QueryList,
  Renderer2, HostListener, OnInit, OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Project } from './project.model';
import { TouchService } from '../touch';
import { ScrollService } from '../scroll';
import { Direction } from '../models';

import smartScreenshot from '../../assets/img/smart-screenshot.jpg';
import muskokaScreenshot from '../../assets/img/muskoka-screenshot.jpg';
import tempostormScreenshot from '../../assets/img/tempostorm-screenshot.jpg';
import deckBuilderScreenshot from '../../assets/img/deck-builder-screenshot.jpg';
import sparkScreenshot from '../../assets/img/spark-screenshot.jpg';
import { setInterval, clearInterval } from 'timers';



@Component({
  selector: 'projects',
  styleUrls: ['./projects.component.scss'],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {

  smartScreenshot = smartScreenshot;
  muskokaScreenshot = muskokaScreenshot;
  tempostormScreenshot = tempostormScreenshot;
  deckBuilderScreenshot = deckBuilderScreenshot;
  sparkScreenshot = sparkScreenshot;

  @ViewChildren('projectPanel')
  panels: QueryList<any>;

  scrollSub: Subscription;
  swipeSub: Subscription;

  panelWidth = 791;
  windowWidth = window.innerWidth;
  rouletteStartLeft = 0
  rouletteEndLeft = 0;
  panelTransition = "all 250ms ease-in-out";
  activeIndex = 2;
  canMove = true;


  constructor(
    private renderer: Renderer2,
    private scrollService: ScrollService,
    private touchService: TouchService,
    private router: Router
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.drawRoulette();
  }

  ngOnInit() {
    this.scrollSub = this.scrollService.onScroll.subscribe(this.onScroll);
    this.swipeSub = this.touchService.onSwipe.subscribe(this.onSwipe);
  }

  ngAfterViewInit() {
    this.drawRoulette()
  }

  ngOnDestroy() {
    if(this.scrollSub) this.scrollSub.unsubscribe();
    if(this.swipeSub) this.swipeSub.unsubscribe();
  }

  drawRoulette() {
    this.rouletteStartLeft = -this.panels.length*this.panelWidth/2 + this.windowWidth/2;
    this.rouletteEndLeft = (this.panels.length-1)*this.panelWidth+this.rouletteStartLeft;
    let leftOffset = this.rouletteStartLeft;
    this.activeIndex = 2;
    this.panels.forEach((panel, index) => {
      this.renderer.setStyle(panel.nativeElement, "left", leftOffset+"px");
      leftOffset += this.panelWidth;
      if(index === this.activeIndex) {
        let that = this;
        setTimeout(() => that.projects[index].isActive = true, 0);
      } else {
        this.projects[index].isActive = false;
      }
    });
  }

  next() {
    if(!this.canMove) {
      return;
    }

    this.activeIndex++;
    if(this.activeIndex > this.projects.length-1) {
      this.activeIndex = 0;
    }

    this.panels.forEach((panel, index) => {
      let offsetLeft = panel.nativeElement.offsetLeft;
      offsetLeft -= this.panelWidth;
      this.renderer.setStyle(panel.nativeElement, "transition", this.panelTransition)
      if(offsetLeft < this.rouletteStartLeft-1) {
        offsetLeft = this.rouletteEndLeft;
        this.renderer.setStyle(panel.nativeElement, "transition", "none");
      }
      this.renderer.setStyle(panel.nativeElement, "left", offsetLeft+"px");

      if(index === this.activeIndex) {
        this.projects[index].isActive = true;
      } else {
        this.projects[index].isActive = false;
      }
    });

    let that = this;
    this.canMove = false;
    setTimeout(()=> {
      that.canMove = true;
    }, 275)
  }

  previous() {
    if(!this.canMove) {
      return;
    }

    this.activeIndex--;
    if(this.activeIndex < 0) {
      this.activeIndex = this.projects.length-1;
    }

    this.panels.forEach((panel, index) => {
      let offsetLeft = panel.nativeElement.offsetLeft;
      offsetLeft += this.panelWidth;
      this.renderer.setStyle(panel.nativeElement, "transition", this.panelTransition);
      if(offsetLeft > this.rouletteEndLeft+1) {
        offsetLeft = this.rouletteStartLeft;
        this.renderer.setStyle(panel.nativeElement, "transition", "none");
      }
      this.renderer.setStyle(panel.nativeElement, "left", offsetLeft+"px");

      if(index === this.activeIndex) {
        this.projects[index].isActive = true;
      } else {
        this.projects[index].isActive = false;
      }

      let that = this;
      this.canMove = false;
      setTimeout(()=> {
        that.canMove = true;
      }, 275)
    });
  }

  scrollTo(index) {
    if(index === this.activeIndex) {
      return;
    }

    let that = this;
    let delta = index - this.activeIndex;
    let absDelta = Math.abs(delta);
    if(absDelta > this.projects.length/2 && delta > 0) {
      delta = delta - this.projects.length;
    } else if(absDelta > this.projects.length/2 && delta < 0) {
      delta = delta + this.projects.length;
    }

    if(delta < 0) {
      let interval = setInterval(() => {
        this.previous();
        delta++;
        if(delta === 0) {
          clearInterval(interval);
        }
      }, 300);
    } else {
      let interval = setInterval(() => {
        this.next();
        delta--;
        if(delta === 0) {
          clearInterval(interval);
        }
      }, 300);
    }
  }

  goToProject(i) {
    if(i === this.activeIndex) {
      return this.router.navigate([this.projects[i].route]);
    }

    this.scrollTo(i);
  }

  onScroll = (direction:Direction): void => {
    if(direction === Direction.Down) {
      this.previous()
    } else {
      this.next();
    }
  }

  onSwipe = (direction:Direction): void => {
    if(direction === Direction.Right) {
      this.previous();
    } else if(direction === Direction.Left) {
      this.next();
    }
  }

  projects = [
    new Project("Deck Builder", deckBuilderScreenshot, '/projects/deck-builder'),
    new Project("Spark", sparkScreenshot, '/projects/spark'),
    new Project("SMART", smartScreenshot, '/projects/smart'),
    new Project("Muskoka", muskokaScreenshot, '/projects/muskoka'),
    new Project("Tempostorm", tempostormScreenshot, '/projects/tempostorm')
  ]
}
