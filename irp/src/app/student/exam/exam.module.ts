import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { SubjectsComponent } from './subjects/subjects.component';



@NgModule({
  declarations: [QuizComponent, ResultComponent, SubjectsComponent],
  imports: [
    CommonModule
  ]
})
export class ExamModule { }
