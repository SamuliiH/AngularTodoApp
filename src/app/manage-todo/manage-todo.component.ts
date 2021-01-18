import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../todo-interface';

@Component({
  selector: 'app-manage-todo',
  templateUrl: './manage-todo.component.html',
  styleUrls: ['./manage-todo.component.css']
})
export class ManageTodoComponent implements OnInit {
  
  id: string;
  todo: Todo;
  todoForm: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute, 
    private route: Router, 
    private fb: FormBuilder,
    private todos: TodoService
    ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.todo = this.todos.getTodo(this.id);
      if(!this.todo) {
        return this.route.navigate(['/page-not-found']);
      }
      this.todoForm = this.fb.group({
        subtitle: 
        [this.todo.subtitle, 
        [Validators.required, Validators.minLength(3)]],
        text: 
        [this.todo.text, 
        [Validators.required, Validators.minLength(5)]]
      });
    });

  }

  onSave(): void {
    this.todos.updateTodo(
      this.id, 
      this.todoForm.value.subtitle.trim(),
      this.todoForm.value.text.trim()
      );
    this.route.navigate(['/']);
  }

  onDelete(): void {
    this.todos.deleteTodo(this.id);
    this.route.navigate(['/']);
  }

  onCompleted(): void {
    this.todos.completeTodo(this.id);
    this.route.navigate(['/']);
  }

}
