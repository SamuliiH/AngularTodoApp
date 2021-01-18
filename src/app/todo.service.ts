import { Injectable } from '@angular/core';
import { Todo } from './todo-interface';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[] = 
  [
    {
     subtitle: "Cat", 
     text: "Lorem ipsum dolor sit amet", 
     id: "0e18e692-5008-d08d-2525-2ab1f51c034f", 
     completed: false
    },
    {
     subtitle: "Cheese", 
     text: "consectetur adipiscing elit", 
     id: "0e18e692-5008-d08d-2525-2ab1f51c035t",
     completed: true
    },
    {
    subtitle: "John Doe", 
    text: "Nam convallis sem eget volutpat", 
    id: "0e18e692-5008-d08d-2525-2ab1f51c034q", 
    completed: false
    }
  ];

  todo: Todo;

  getTodos(): Todo[] {
    return this.todoList;
  }

  getTodo(id: string): Todo {
    return this.todoList.find(todo => todo.id == id);
  }

  addTodo(subtitle: string, text: string): void {
    this.todo = {subtitle, text, id: this.createId(), completed: false}
    this.todoList.push(this.todo);
  }

  deleteTodo(id: string): void {
    let index = this.todoList.findIndex(todo => todo.id === id);
    this.todoList.splice(index,1);
  }

  updateTodo(id: string, newSubtitle: string, newText: string): void {
    this.todo = this.getTodo(id);
    this.todo.subtitle = newSubtitle;
    this.todo.text = newText;
  }

  completeTodo(id: string): void {
    this.getTodo(id).completed = !this.getTodo(id).completed;
  }

  createId(): string {
    return UUID.UUID();
  }
  
}
