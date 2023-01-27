import { Injectable, EventEmitter } from '@angular/core';
import { Direction } from '../models';



@Injectable()
export class ScrollService {
    public onScroll = new EventEmitter<Direction>();
    public shouldScroll = true;
}
