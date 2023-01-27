import {
    Component
} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

import muskokaImg from '../../../assets/img/muskoka-screenshot.jpg';


@Component({
    selector: 'muskoka',
    styleUrls: ['./muskoka.component.scss'],
    templateUrl: './muskoka.component.html'
})
export class MuskokaComponent {

    muskokaImg = muskokaImg;

    backgroundCSS = this.sanitizer.bypassSecurityTrustStyle(`url(${muskokaImg}) no-repeat center center fixed`);

    constructor(private sanitizer: DomSanitizer) {}
}