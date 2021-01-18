import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoDialogComponent } from '../new-todo-dialog/new-todo-dialog.component';


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent {

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(NewTodoDialogComponent); 
  }

}
