import {
    Component
} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

import smartImg from '../../../assets/img/smart-screenshot.jpg';


@Component({
    selector: 'smart',
    styleUrls: ['./smart.component.scss'],
    templateUrl: './smart.component.html'
})
export class SmartComponent {

    smartImg = smartImg;

    backgroundCSS = this.sanitizer.bypassSecurityTrustStyle(`url(${smartImg}) no-repeat center center fixed`);

    constructor(private sanitizer: DomSanitizer) {}
}