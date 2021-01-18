import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo-interface';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList: Todo[] = this.todos.getTodos();

  constructor(private todos: TodoService) {}

}
