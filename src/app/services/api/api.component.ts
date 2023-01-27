import {
  Component, Injector
} from '@angular/core';
import { Direction } from '../../models';
import { ServiceComponent } from '../../services';

import apiImg from '../../../assets/img/api.png';


@Component({
  selector: 'api',
  styleUrls: ['./api.component.scss'],
  templateUrl: './api.component.html'
})
export class APIComponent extends ServiceComponent {

  apiImg = apiImg;

  constructor(
    protected injector: Injector
  ) { 
    super(injector);
  }

  onMove(direction: Direction): void {
    if(!this.shouldScroll()) {
      return;
    }

    if (direction === Direction.Up) {
      this.router.navigate(['services/seo'], { replaceUrl: true });
    } else if(direction === Direction.Down) {
      this.router.navigate(['services/hosting'], { replaceUrl: true });
    } else if(direction === Direction.Left || direction === Direction.Right) {
      this.location.back();
    }
  }

  sections = [
    {
      label: "Consume and distribute data",
      content: "Your API is your gateway to your information and should be consumable in the most generic and platform independent way possible. Other companies adhering to this philosophy allow you to consume whatever data you need as well."
    },
    {
      label: "Integrations",
      content: "API integrations all you to aggregate all the data you need to provide the best service possible. From real estate information to a Facebook profile all this information is available and can be used to serve your needs."
    },
    {
      label: "REST",
      content: "Leverage the ubiquity of the HTTP standard and make the most open and available API possible. Using a language independent style your data will be available to any web service and your developers can use whatever technology best suits their needs."
    }
  ]
}