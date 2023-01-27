import {
  Component, Injector
} from '@angular/core';
import { Direction } from '../../models';
import { ServiceComponent } from '../../services';

import designImg from '../../../assets/img/design.png';


@Component({
  selector: 'design',
  styleUrls: ['./design.component.scss'],
  templateUrl: './design.component.html'
})
export class DesignComponent extends ServiceComponent {

  designImg = designImg;

  constructor(
    protected injector: Injector
  ) { 
    super(injector);
  }

  onMove(direction: Direction): void {
    if(!this.shouldScroll()) {
      return;
    }

    if (direction === Direction.Down) {
      this.router.navigate(['services/security'], { replaceUrl: true });
    } else if(direction === Direction.Up) {
      this.router.navigate(['services/website'], { replaceUrl: true });
    } else if(direction === Direction.Left || direction === Direction.Right) {
      this.location.back();
    }
  }

  sections = [
    {
      label: "Be awesome and look great doing it",
      content: "Visual design is arguably the most important part of creating a positive user experience. All the functionality in the world is useless if your users don't feel good doing it."
    },
    {
      label: "Responsive",
      content: "Your design needs to be versatile enough to look good on any device and screen size. Don't waste time and money creating multiple solutions for the same product."
    },
    {
      label: "Intuitive",
      content: "Users should never be questioning how your product works. Design standards have evolved to the point where people have expectations about how software reacts and your design needs to keep up with those standards. If you do it right you might even create some standards of your own!"
    },
    {
      label: "Fast",
      content: "An ambitious design should not translate to a slow application. Assets should be optimized for the web and only downloaded if they're needed."
    }
  ]
}