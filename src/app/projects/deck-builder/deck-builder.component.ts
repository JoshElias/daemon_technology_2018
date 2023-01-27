import {
    Component
} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'


import deckBuilderImg from '../../../assets/img/deck-builder-screenshot.jpg';


@Component({
    selector: 'deck-builder',
    styleUrls: ['./deck-builder.component.scss'],
    templateUrl: './deck-builder.component.html'
})
export class DeckBuilderComponent {

    deckBuilderImg = deckBuilderImg;

    backgroundCSS = this.sanitizer.bypassSecurityTrustStyle(`url(${deckBuilderImg}) no-repeat center center fixed`);

    constructor(private sanitizer: DomSanitizer) {}
}