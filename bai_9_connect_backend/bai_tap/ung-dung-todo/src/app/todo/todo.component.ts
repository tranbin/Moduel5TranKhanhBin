import {Component, OnInit} from '@angular/core';
import {ITodo} from "../../model/ITodo";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: ITodo[] = [];
  content = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }
  change() {
    const value = this.content.value;
    if (value) {
      const todo: ITodo = {
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }

}
