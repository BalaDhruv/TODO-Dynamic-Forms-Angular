import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/repos/services/todo.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Todo } from 'src/app/repos/model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  public formGroup: FormGroup;
  public submitted: boolean;
  public headers: Todo[] = [];
  public todos: any[] = [];
  public today = (new Date()).toISOString();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      master: new FormArray([])
    });
    this.todoService.getTodosHeaders().subscribe((headers: Todo[]) => {
      this.headers = headers;
      this.todoService.getTodos().subscribe((todos: any[]) => {
        this.todos = todos;
        console.log(this.todos);
        this.formGroup = new FormGroup({
          master: new FormArray(this.todos.map((todo) => this.createFormGroup(todo)))
        });
      });
      this.createFormGroup(headers);
    });
  }

  get master() {
    return this.formGroup.get('master') as FormArray;
  }

  createFormGroup(todo: any) {
    var formControls: any = {};
    this.headers.forEach((head: any) => {
      formControls[head.name] = new FormControl({ value: head.name === 'Date' ? (new Date()).toISOString() : todo[head.name], disabled: head.name === 'Id' ? true : false }, [<any>Validators.min(head.min), <any>Validators.max(head.max)]);
    });
    return new FormGroup(formControls);
  }

}
