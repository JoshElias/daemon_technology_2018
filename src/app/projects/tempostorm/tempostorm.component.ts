import {
    Component
} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

import tempostormImg from '../../../assets/img/tempostorm-screenshot.jpg';


@Component({
    selector: 'tempostorm',
    styleUrls: ['./tempostorm.component.scss'],
    templateUrl: './tempostorm.component.html'
})
export class TempostormComponent {

    tempostormImg = tempostormImg;

    backgroundCSS = this.sanitizer.bypassSecurityTrustStyle(`url(${tempostormImg}) no-repeat center center fixed`);

    constructor(private sanitizer: DomSanitizer) {}
}