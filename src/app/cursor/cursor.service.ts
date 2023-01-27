import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from "rxjs/Subscription"


@Injectable()
export class CursorService {

    hovering = new BehaviorSubject(false);

    constructor(private router: Router) {
        let that = this;
        this.router.events.subscribe((event: RouterEvent) => {
            if(event instanceof NavigationEnd) {
                that.hovering.next(false);
            }
        })
    }
}
