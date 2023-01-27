import { Injectable } from '@angular/core';
import { Point } from '../models';


@Injectable()
export class PivotService {
    public transform = new Point();
}
