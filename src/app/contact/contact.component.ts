import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../animations';

import contactImg from '../../assets/img/contact.png';

@Component({
  selector: 'contact',
  styleUrls: [ './contact.component.scss' ],
  templateUrl: './contact.component.html',
  //animations: [routerTransition()],
  //host: {'[@routerTransition]': ''}
})
export class ContactComponent {

  contactImg = contactImg;

  constructor() {}
}
