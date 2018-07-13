import { Component } from '@angular/core';
import { Question } from '../question/question.model';

const q = new Question(
  'Cómo reutilizo un componente en android',
  'Miren la pregunta es..',
  new Date(),
  'devicon-android-plain'
)

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
  `]
})
export class QuestionListComponent {
  questions: Question[] = new Array(10).fill(q);
}