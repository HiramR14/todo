import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput = '';
  name = "Hiram";
  todos = [
    'Drink water',
    'Play fortnite',
    'Call my mom',
    'Watch Ninja',
    'Do Homework'
  ];

  addTodo() {
    this.todos.push(this.todoInput);
    this.todoInput = "";
  }

  editTodo(chore) {
    let index = this.todos.indexOf(chore);
    this.todos[index] = prompt("New chore");
  }

  deleteTodo(chore) {
    {
      let index = this.todos.indexOf(chore);
      this.todos.splice(index, 1);

    }
  }
}
