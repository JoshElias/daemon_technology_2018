import {
    Component
  } from '@angular/core';

  import aboutImg from '../../assets/img/about.png';
  
  
  @Component({
    selector: 'about',
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html'
  })
  export class AboutComponent {
  
    aboutImg = aboutImg;
  
    constructor() { }
  
  }