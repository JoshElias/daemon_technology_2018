import {
  Component, Injector
} from '@angular/core';
import { Direction } from '../../models';
import { ServiceComponent } from '../../services';

import hostingImg from '../../../assets/img/hosting.png'


@Component({
  selector: 'hosting',
  styleUrls: ['./hosting.component.scss'],
  templateUrl: './hosting.component.html'
})
export class HostingComponent extends ServiceComponent {

  hostingImg = hostingImg;


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
      this.router.navigate(['services/website'], { replaceUrl: true });
    } else if(direction === Direction.Up) {
      this.router.navigate(['services/api'], { replaceUrl: true });
    } else if(direction === Direction.Left || direction === Direction.Right) {
      this.location.back();
    }
  }

  sections = [
    {
      label: "Don't pay for what you don't use",
      content: "Power your website with Amazong Web Services. A pay as you go platform that ensures that you only pay for what you need. This translates to very tiny monthly bills and the service can be cancelled at any time. Don't lock yourself down for any length of time."
    },
    {
      label: "Domain Hosting",
      content: "Large services like GoDaddy want to sell you a domain with things like storage and traffic paid in advance. More things you're paying for that you don't necessarily need. Domain Hosting should be simple and cheap and now it can be."
    },
    {
      label: "Global Deployment",
      content: "When choosing a hosting service you want one that will scale with your business. With global deployments you can launch your service with low latency anywhere in the world. Synchronize your datasets and APIs so your customers get the same experience whether they live in the United States or Australia!"
    },
    {
      label: "Content Delivery Network",
      content: "CDNs allow your content to be cached locally to the users location. Compete with the largest tech companies in the world with the fastest load times available and save money on asset distribution at the same time!"
    }
  ]

}