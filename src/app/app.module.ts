import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormModule } from './shared/form-module.module';
import { TodoComponent } from './ui/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
