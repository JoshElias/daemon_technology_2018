import {
  Component, Injector
} from '@angular/core';
import { Direction } from '../../models';
import { ServiceComponent } from '../../services';

import securityImg from '../../../assets/img/security.png';


@Component({
  selector: 'security',
  styleUrls: ['./security.component.scss'],
  templateUrl: './security.component.html'
})
export class SecurityComponent extends ServiceComponent {

  securityImg = securityImg;


  constructor(
    protected injector: Injector
  ) {
    super(injector);
  }


  onMove(direction: Direction): void {
    if (!this.shouldScroll()) {
      return;
    }

    if (direction === Direction.Down) {
      this.router.navigate(['services/seo'], { replaceUrl: true });
    } else if (direction === Direction.Up) {
      this.router.navigate(['services/design'], { replaceUrl: true });
    } else if(direction === Direction.Left || direction === Direction.Right) {
      this.location.back();
    }
  }

  sections = [
    {
      label: "Confidence and safety are your top priorities",
      content: "Users trust you with their information and it's your job to handle it responsibly. This means when their information is being transferred over the internet it should go where they expect and not to malicious third-parties."
    },
    {
      label: "SSL",
      content: "The golden standard for encryption over the net. SSL is used by millions of websites to establish an encrypted link between the browser and the server. Traditionally expensive but with AWS you get it for 0 cost!"
    },
    {
      label: "JSON Web Tokens",
      content: "A relatively new technology adding another layer of security to your online service. Using HMAC or RSA you can digitally sign your information and keep it secret from outsiders. It also allows for you to define user levels so your Administrators can have special rights over regular users."
    },
    {
      label: "Private Networks",
      content: "What's the best way to keep your information safe from hackers? Don't expose it to the internet! Private networks allow your services to consume data over their own private network. This not only makes data transferring secure but super fast!"
    }
  ]
}