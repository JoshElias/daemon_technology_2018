import {
  Component
} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceListing } from './service-listing';

import apiServiceImg from '../../assets/img/api-service.png';
import designServiceImg from '../../assets/img/design-service.png';
import hostingServiceImg from '../../assets/img/hosting-service.png';
import securityServiceImg from '../../assets/img/security-service.png';
import seoServiceImg from '../../assets/img/seo-service.png';
import websiteServiceImg from '../../assets/img/website-service.png';


@Component({
  selector: 'services',
  styleUrls: ['./services.component.scss'],
  templateUrl: './services.component.html'
})
export class ServicesComponent {

  apiServiceImg = apiServiceImg;
  designServiceImg = designServiceImg;
  hostingServiceImg = hostingServiceImg;
  securityServiceImg = securityServiceImg;
  seoServiceImg = seoServiceImg;
  websiteServiceImg = websiteServiceImg;


  constructor(private router: Router) { }


  listings = [
    new ServiceListing("Website", websiteServiceImg, '/services/website'),
    new ServiceListing("Hosting", hostingServiceImg, '/services/hosting'),
    new ServiceListing("API", apiServiceImg, '/services/api'),
    new ServiceListing("SEO", seoServiceImg, '/services/seo'),
    new ServiceListing("Security", securityServiceImg, '/services/security'),
    new ServiceListing("Design", designServiceImg, '/services/design')
  ]
}

