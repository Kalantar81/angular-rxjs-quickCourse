import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.less']
})
export class SubjectComponent implements OnInit {

  public subjectValue: any;
  public updateSubjectValue: any;

  public behaviorSubjectValue: any;
  public updateBehaviorSubjectValue: any;

  public replaySubjectValue: any;
  public updateReplaySubjectValue: any;
  public replaySubjectArray: Array<any> = [];


  constructor(private subjectServise: SubjectService) {
    /** to get a value from subject, we need first to make a subscribe, and only after it emit changes */
    subjectServise.subject$.subscribe((value) => {
      this.subjectValue = value;
    });

    subjectServise.behaviorSubject$.subscribe((value) => {
      this.behaviorSubjectValue = value;
    });

    subjectServise.replaySubject$.subscribe(
      (value) => {
        this.replaySubjectValue = value;
        this.replaySubjectArray.push(value);
      }
    );
  }

  ngOnInit() {
  }

  public subjectBtn(): void {
    /** I can call next() when ever I want and not only, when I define it */
    this.subjectServise.setSubject(this.updateSubjectValue);
    this.updateSubjectValue = '';
  }

  public behaviorSubjectBtn(): void {
    this.subjectServise.setBehaviorSubject(this.updateBehaviorSubjectValue);
    this.updateBehaviorSubjectValue = '';
  }

  public replaySubjectBtn(): void {
    this.subjectServise.setReplaySubject(this.updateReplaySubjectValue);
    this.updateReplaySubjectValue = '';
  }
}
