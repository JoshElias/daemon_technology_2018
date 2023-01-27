import {
  Component, Injector
} from '@angular/core';
import { Direction } from '../../models';
import { ServiceComponent } from '../../services';

import seoImg from '../../../assets/img/seo.png';

@Component({
  selector: 'seo',
  styleUrls: ['./seo.component.scss'],
  templateUrl: './seo.component.html'
})
export class SEOComponent extends ServiceComponent {

  seoImg = seoImg;

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
      this.router.navigate(['services/api'], { replaceUrl: true });
    } else if(direction === Direction.Up) {
      this.router.navigate(['services/security'], { replaceUrl: true });
    } else if(direction === Direction.Left || direction === Direction.Right) {
      this.location.back();
    }
  }

  sections = [
    {
      label: "A beautiful site is fine, seeing it is better!",
      content: "I always work hard to find the perfect optimisations for visibility and achieve the highest conversion rate possible. With Google Ads, this is easy and effective"
    },
    {
      label: "Adwords and SEA Optimizations",
      content: "Organizing a marketing campaign is not limited to budget. It's about preparation, understanding and optimizing. I'll work with you to identify the most relevant keywords so your users can find you easily. Maximize your conversion rate for the lowest investment and get maximum return."
    },
    {
      label: "Optimized SEO",
      content: "SEO is my priority and hopefull it's yours too. It's the best way to ensure quality daily traffic. To achieve this my CMS allows you to work on a series of parameters for maximum impact. The more you work with me the easier this will become allowing you to master the best practices."
    },
    {
      label: "Social Network",
      content: "Social networks bring you closer to your customers but requires constant work. Using automation you can be active without spending too much thing. I'll take care of your community, interact for you and optimize your digital communication."
    },
    {
      label: "Monitoring, Tracking and Conversion",
      content: "The goal of a website and marketing is ultimately conversion. Using Google Analytics I can track the path of your users. This is invaluable when developing your marketing strategies to guide your customers and make contact."
    },
    {
      label: "Custom Emailing",
      content: "Email is a powerful tool. To maximize it's impact the design needs to be tailored and personalized. Work with me to offer an innovative solution that will challenge your customers."
    },
    {
      label: "Newsletters and Loyalty",
      content: "Just like a blog, a newsletter allows you to retain your audience and understand their expectations. This loyalty will help you appear sympathic and is fundamental in keeping touch with your soucrce of income: your current customers."
    }
  ]
}