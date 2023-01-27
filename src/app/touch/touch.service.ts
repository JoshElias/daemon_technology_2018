import { Injectable, EventEmitter } from '@angular/core';
import { Direction } from '../models';



@Injectable()
export class TouchService {
    public onSwipe = new EventEmitter<Direction>();
}
