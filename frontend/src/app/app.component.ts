import { Component } from '@angular/core';

import {ExamsApiService} from './exams/exams-api.service';
import {Exam} from './exams/exam.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  examsList: Exam[] = [];
  private examsListSubs = new Subscription

  constructor(private examsApi: ExamsApiService) {
  }

  ngOnInit() {
    this.examsListSubs = this.examsApi
      .getExams()
      .subscribe(res => {
          this.examsList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.examsListSubs.unsubscribe();
  }
}
