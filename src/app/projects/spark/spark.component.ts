import {
    Component
} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

import sparkImg from '../../../assets/img/spark-screenshot.jpg';


@Component({
    selector: 'spark',
    styleUrls: ['./spark.component.scss'],
    templateUrl: './spark.component.html'
})
export class SparkComponent {

    sparkImg = sparkImg;

    backgroundCSS = this.sanitizer.bypassSecurityTrustStyle(`url(${sparkImg}) no-repeat center center fixed`);

    constructor(private sanitizer: DomSanitizer) {}
}