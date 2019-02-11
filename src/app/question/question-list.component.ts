import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question.model';
import { QuestionService } from './question.service';

/* const q = new Question(
  'Cómo reutilizo un componente en android',
  'Miren la pregunta es..',
  new Date(),
  'devicon-android-plain'
) */

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styles: [`
    i {
      font-size: 40px;
    }

    i.help {
      width: 40px !important;
      height: 40px !important;
      padding: 0 !important;
      font-size: 40px !important;
    }

    .add-question {
      position: fixed;
      bottom: 30px;
      right: 30px;
      font-size: 24px;
    }

    .spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 30%;
      width: 50%;
      margin: 0 0 0 -15%;
    }
  `],
  providers: [QuestionService]
})
export class QuestionListComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  questions: Question[]; // = new Array(10).fill(q);
  loading = true;

  ngOnInit() {
    this.questionService.getQuestions()
    .then((questions: Question[]) => {
      this.questions = questions;
      this.loading = false;
    });
  }
}