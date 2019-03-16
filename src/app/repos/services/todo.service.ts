import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodosHeaders() {
    return this.http.get('./assets/todos-headers.json').pipe(
      catchError(err => {
        return of({
          error: err.error.message ? err.error.message : err.message,
          message: err.statusText,
        });
      })
    );
  }

  getTodos() {
    return this.http.get('./assets/todos.json').pipe(
      catchError(err => {
        return of({
          error: err.error.message ? err.error.message : err.message,
          message: err.statusText,
        });
      })
    );
  }
}
