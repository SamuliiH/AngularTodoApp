import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-new-todo-dialog',
  templateUrl: './new-todo-dialog.component.html',
  styleUrls: ['./new-todo-dialog.component.css']
})
export class NewTodoDialogComponent implements OnInit{
  
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewTodoComponent>,
    private todos: TodoService) {}             
  
  ngOnInit(): void {
    this.todoForm = this.fb.group({
      subtitle: 
      ['', 
      [Validators.required, Validators.minLength(3)]],
      text: 
      ['', 
      [Validators.required, Validators.minLength(5)]]
    });
  }            

  onSave(): void {  
    this.todos.addTodo(
      this.todoForm.value.subtitle.trim(), 
      this.todoForm.value.text.trim()
      );
    this.dialogRef.close();
  }
  
  onUndo(): void {
    this.dialogRef.close();
  }

}
