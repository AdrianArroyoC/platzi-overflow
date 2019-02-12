import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { User } from '../auth/user.model';
import { Question } from '../question/question.model';
import { QuestionService } from '../question/question.service';


@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css'],
  providers: [ QuestionService ]
})
export class AnswerFormComponent implements OnInit {
  @Input() question: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    //console.log(form.value.description);
    const answer = new Answer(
      form.value.description,
      this.question
      /*new Date(),
      new User(null, null, 'Paula', 'Becerra')*/
    );
    this.questionService.addAnswer(answer)
      .subscribe(
        a => this.question.answers.unshift(a),
        error => console.log(error)
      )
    //this.question.answers.unshift(answer); //push al final
    form.reset();
  } //Convención del nombre de método para cuando un usuario manda datos
}
