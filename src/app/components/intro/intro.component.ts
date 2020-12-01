import { Component, OnInit } from '@angular/core';

import {interval, Observable} from 'rxjs';
import {filter, map, take, scan} from 'rxjs/operators';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit {

  public people: Array<{name: string, age: number}> = [
    {name: 'Vladilen', age: 25},
    {name: 'Elena', age: 17},
    {name: 'Ivan', age: 18},
    {name: 'Igor', age: 14},
    {name: 'Lisa', age: 32},
    {name: 'Irina', age: 23},
    {name: 'Oleg', age: 20}
  ];

  public showBtn: boolean = true;
  public result: string;

  constructor() { }

  ngOnInit() {
  }

  public click(): void {
    this.showBtn = false;
    this.result = '';

  // на выходе получаем stream
  interval(1000)
    .pipe(
      // how many elements we need to take
      take(this.people.length),
      // v - index of array, shows all bigger than 18 years
      filter(v => this.people[v].age >= 18),
      map(v => this.people[v].name),
      /** @param accumulator - array, that acumulates data, @param value - data from map(), [] - default value */
      scan((accumulator, value) => accumulator.concat(' ' + value))
    )
    .subscribe(res => {
      this.result = (res);
    },
    null,
    () => this.showBtn = true);
  }

}
