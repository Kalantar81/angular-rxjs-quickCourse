import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  public subject$ = new Subject();
  public behaviorSubject$ = new BehaviorSubject('default value');

  /* indicator how many values back, to show
   * by default, shows all values
   * сколько обратых значений показывать new ReplaySubject(2)
   */
  public replaySubject$ = new ReplaySubject(2);

  constructor() {
    this.replaySubject$.next('first value');
    this.replaySubject$.next('second value');
    this.replaySubject$.next('third value');
    this.replaySubject$.next('fourth value');
  }

  public setSubject(p_val: any): void {
    this.subject$.next(p_val);
  }

  public setBehaviorSubject(p_val: any): void {
    this.behaviorSubject$.next(p_val);
  }

  public setReplaySubject(p_val: any): void {
    this.replaySubject$.next(p_val);
  }

}
