import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  //---properties---
  rootUrl = "http://localhost:8080/api";
  questions: any[];
  seconds: number;
  timer;
  qstProgress: number;
  correctAnswerCounter: number = 0;
  subjectId: number;
  // qIds: QuestionId[];

  //---ctor---
  constructor(private http: HttpClient) { }

  //---helper methods---
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  //---http methods---

  getQuestions() {
    return this.http.get(this.rootUrl + "/exam/quiz");
  }

  getQuestionsBySubject(): Observable<any>{
    this.subjectId= parseInt(localStorage.getItem('subjectId'));
    var body = {
      'subjectId': this.subjectId
    }
    return this.http.post<any>(this.rootUrl + "/exam/quiz/subject", body);
  }

  getAnswers(): Observable<any> {
    var body = [];
    for (var i = 0; i < 10; i++) {
      var obj = { "questionId": this.questions[i].questionId };
      body.push(obj);
    }
    //var body = this.questions.map(question => question.questionId);
    console.log(body);
    return this.http.post<any>(this.rootUrl + "/exam/answers", body);
  }

  // submitScore(){
  //   var body= ;
  //   body.score= this.correctAnswerCounter;
  //   body.timeSpent= this.seconds;
  //   return this.http.post()
  // }
}
