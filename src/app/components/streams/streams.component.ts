import { Component, OnInit } from '@angular/core';
import {of, Observable, interval, from} from 'rxjs';
import {scan} from 'rxjs/operators';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.less']
})
export class StreamsComponent implements OnInit {

  public showBtn = true;

  public firstStream: any;
  public secondStream: any;
  public thirdStream: any;

  public thirdStream$ = new Observable(observer => {
    observer.next('first value');
    setTimeout(() => observer.next('After 1000 ms'), 1000);
    setTimeout(() => observer.complete(), 1500); // ending sream and others functions will not run
    setTimeout(() => observer.error('After 2000 ms'), 2000);
    setTimeout(() => observer.next('After 3000 ms'), 3000);
});

  /** @param of create streams from data */
  public stream$ = of(1, 2, 3, 4, 5, 6, 7);

  /** the same like of, but works with arrays */
public arr$ = from([1, 2, 3, 4]);

  constructor() { }

  ngOnInit() {
  }


  public firstStreamBtn(): void {
    this.stream$.subscribe( val => {
      this.firstStream = val;
      console.log(val);
    });
  }

  public secondStreamBtn(): void {
    this.arr$.subscribe(val => {
      this.secondStream = val;
      console.log(val);
    });
  }

  public thirdStreamBtn(): void {
    this.thirdStream$.subscribe(
      val => {
        this.thirdStream = val;
        console.log('val: ', val)
      }, // allways works like next()
      err => console.log(err), // error
      () => console.log('Complite') // complite
    )
  }

}
