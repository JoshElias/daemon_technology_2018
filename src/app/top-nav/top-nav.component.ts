
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import daemonLogo from '../../assets/img/daemon-logo.svg';


@Component({
  selector: 'top-nav',
  styleUrls: [
    './top-nav.component.scss'
  ],
  templateUrl: './top-nav.component.html'
})
export class TopNavComponent implements OnInit {

  daemonLogo = daemonLogo;
  logoDisplay = 'none';
  navEndSub: Subscription;

  constructor(
    private router: Router) { 

    }

  ngOnInit() {
    this.navEndSub = this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        if (event.url === '/' || event.url === '/home') {
          this.hideLogo();
        } else {
          this.showLogo();
        }
      }
    });
  }

  ngOnDestroy() {
    if(this.navEndSub)
      this.navEndSub.unsubscribe();
  }

  showLogo() {
    this.logoDisplay = 'inline-block';
  }

  hideLogo() {
    this.logoDisplay = 'none';
  }
}
