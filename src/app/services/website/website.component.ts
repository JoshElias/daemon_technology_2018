import {
  Component, Injector, OnInit
} from '@angular/core';
import { Direction } from '../../models';
import { ServiceComponent } from '../../services';

import websiteImg from '../../../assets/img/website.png';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';


@Component({
  selector: 'website',
  styleUrls: ['./website.component.scss'],
  templateUrl: './website.component.html'
})
export class WebsiteComponent extends ServiceComponent {

  websiteImg = websiteImg;

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
      this.router.navigate(['services/design'], { replaceUrl: true });
    } else if (direction === Direction.Up) {
      this.router.navigate(['services/hosting'], { replaceUrl: true });
    } else if(direction === Direction.Left || direction === Direction.Right) {
      this.location.back();
    }
  }

  sections = [
    {
      label: "Make more than just a website",
      content: "Don't limit yourself to templates and frameworks, only your imagination. Every detail of development is under your control. Nothing is impossible. The future of software is in the web."
    },
    {
      label: "Corporate Website",
      content: "Your website is your main tool to communicate the technological capability of your company. Centralize all your marketing actions, websites allow your brand image to be seen and remain relevant in the long term. To innovate and be up on time, your website isn't only quality content, it's your online credibility."
    },
    {
      label: "E-commerce and E-shop",
      content: "Ergonomic, fast, efficient, an eshop is all of that in a design that will catch the eye. Customize the look of your shop to set you apart from the rest. You can also integrate with existing online shops such as Shopify, Stripe or Etsy just to name a few."
    },
    {
      label: "CMS and Content Management",
      content: "Be autonomous in the content of your site in the simplest and most effective way possible. Manage everything without technical experience in a light, flexible and powerful dashboard. Update daily and seamlessly. Your life should be easy."
    },
    {
      label: "Ergonomic and Responsive",
      content: "Smartphones and tablets have changed the way people view websites. It must be accessible and optimized for mobile devices. The multitude of media must be viewable on all types of browsers. Develop a responsive solution to cover all possible resolutions. Your site will be seen everywhere."
    }
  ]
}