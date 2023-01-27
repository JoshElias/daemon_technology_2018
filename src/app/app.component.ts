import { Component, OnInit, ViewEncapsulation, HostListener, HostBinding } from '@angular/core';
import { environment } from 'environments/environment';
import { AppService } from './app.service';
import { win32 } from 'path';


@Component({
  selector: 'body',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
  template: `
    <cursor></cursor>
    <touch></touch>
    <scroll></scroll>
    <top-nav></top-nav>
    <main spotlightBackground>
      <router-outlet windowScroll></router-outlet>
    </main> 
  `
})
export class AppComponent implements OnInit {

  @HostBinding('class.landscape') 
  isLandscape = false
  

  constructor(
    public appService: AppService
  ) { }

  public ngOnInit() {
    this.appService.isLandscape.next((this.appService.isMobile && window.innerHeight < window.innerWidth) ? true : false);
    this.isLandscape = this.appService.isLandscape.getValue();
    //window.addEventListener("deviceorientation", this.handleOrientation, true);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.appService.isLandscape.next((this.appService.isMobile && event.target.innerHeight < event.target.innerWidth) ? true : false);
    this.isLandscape = this.appService.isLandscape.getValue();
  }

  handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;

    //left is negative, right is positive. I think
  
    // Do stuff with the new orientation data
  }
}