
import { Component  } from '@angular/core';
import { Location } from '@angular/common';


import daemonLogo from '../../assets/img/daemon-logo.svg';


@Component({
  selector: 'nav',
  styleUrls: [
    './nav.component.scss'
  ],
  templateUrl: './nav.component.html'
})
export class NavComponent {

  daemonLogo = daemonLogo;

  constructor(
    private location: Location) {

  }

  back() {
    this.location.back();
  }
}
