import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/repos/services/todo.service';
import { FormGroup } from '@angular/forms';
import { Todo } from 'src/app/repos/model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  public formGroup: FormGroup;
  public formGroups: FormGroup[];
  public submitted: boolean;
  public headers: String[] = [];
  public todos: number[] = [1, 2, 3, 4];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodosHeaders().subscribe((todos: Todo[]) => {
      todos.forEach((todo: Todo) => {
        this.headers.push(todo.name);
        console.log(this.headers);
      });
    });
  }

  createFormGroup(todo: number) {

  }

}
