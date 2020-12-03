import { Injectable } from '@angular/core';

import {interval, fromEvent, Subject, Observable, from} from 'rxjs';
import {
  map,
  filter,
  tap,
  take,
  takeLast,
  takeWhile,
  scan,
  reduce,
  switchMap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  public stream$ = interval(1000);

  public shortTimeStream$ = interval(10);




  constructor() {}

  public aaa(): Observable<string> {
    const streamValue = 'hello word!';
    return new Observable(
      observer => observer.next(streamValue)
    );
  }


}
