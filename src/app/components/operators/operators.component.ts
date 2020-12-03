import { Component, OnInit } from '@angular/core';
import { OperatorsService } from './operators.service';

import {interval, fromEvent, Subject, Observable, BehaviorSubject} from 'rxjs';
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
import { Subscription } from 'rxjs/internal/Subscription';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.less']
})
export class OperatorsComponent implements OnInit {

  public streamForMapValue: number;
  public streamForFilterValue: number;
  public streamForTakeValue: number;
  public streamForTakeWhileValue: number;
  public streamForScan: any;
  public streamForReduce: any;
  public tapForReduce: string;
  public switchMapFirstStreamValue: number;
  public switchMapSecondStreamValue: number;

  public streamTakeLastArr: Array<number> = [];
  public streamForScanArr: Array<any> = [];

  public takeVal: number;
  public takeLast: number;


  constructor(private operatorsService: OperatorsService) {

  }

  ngOnInit() {
  }

  public streamForMapBtn(): void {
    this.operatorsService.stream$.pipe(
      map(v => v * 10),
      take(5)
    ).subscribe(
      value => {
        this.streamForMapValue = value;
      });
  }

  public streamForFilterBtn(): void {
    this.operatorsService.stream$.pipe(
      tap(v => console.log('Tap: ', v)),
      filter(v => v % 2 === 0),
      take(10)
    ).subscribe(
      value => {
        this.streamForFilterValue = value;
      });
  }

  public streamForTakeBtn(): void {
    this.operatorsService.stream$.pipe(
      take(this.takeVal)
    ).subscribe(
      value => {
        this.streamForTakeValue = value;
      });
  }

  public streamForTakeLastBtn(): void {
    const arr: Array<number> = [];
    this.operatorsService.shortTimeStream$.pipe(
      tap(v => console.log('tap: ', v)),
      take(10),
      takeLast(this.takeLast)
    ).subscribe(
      value => {
        if (value) {arr.push(value)};
        console.log(arr);
        if(arr.length == this.takeLast) {
          this.streamTakeLastArr = arr;
        }
      });
  }

  public streamForTakeWhileBtn(): void {
    this.operatorsService.stream$.pipe(
      tap(v => console.log('Tap: ', v)),
      takeWhile(v => v < 5)
    ).subscribe(
      value => {
        this.streamForTakeWhileValue = value;
      });
  }

  public streamForScanBtn(): void {
    const arr: Array<number> = [];
    this.operatorsService.stream$.pipe(
      tap(v => console.log('Tap: ', v)),
      take(5),
      scan((acc, v) => acc + v, 0 )
    ).subscribe(
      value => {
        this.streamForScan = value;
        arr.push(value);
        if (arr.length == 5) {
          this.streamForScanArr = arr;
        }
      });
  }

  public streamForReduceBtn(): void {
    this.operatorsService.stream$.pipe(
      tap(v => this.tapForReduce = 'Tap: ' + v),
      take(5),
      /** The same like scan, but works only with finished streams */
      reduce((acc, v) => acc + v, 0)
    ).subscribe(
      value => {
        this.streamForReduce = value;
      });
  }

  public streamForSwitchMapBtn(): void {
    this.operatorsService.shortTimeStream$.pipe(
      tap(v => console.log('Tap from first stream: ' + v)),
      take(5),
      reduce((acc, v) => this.switchMapFirstStreamValue = (acc + v), 0),
      switchMap(event => {
        return this.operatorsService.stream$
         .pipe(
           tap(v => console.log('Tap from second stream: ' + v)),
           take(5),
           map((v) => (v + this.switchMapFirstStreamValue))
         );
       })
    ).subscribe(
      value => {
        this.switchMapSecondStreamValue = value;
      });
  }

}
