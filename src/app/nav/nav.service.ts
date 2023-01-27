import { Injectable } from '@angular/core';


@Injectable()
export class NavService {
    
    public isVisible = false;

    show() {
        this.isVisible = true;
    }

    hide() {
        this.isVisible = false;
    }

    toggle() {
        this.isVisible = !this.isVisible;
    }
}
