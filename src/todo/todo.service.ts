import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { todo } from 'node:test';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.find((td) => td.id === id);
  }

  getTodoByUserId(userId: number): Todo {
    return this.todos.find((td) => td.userId === userId);
  }

  createTodo(todo: Todo): string {
    this.todos.push(todo);
    return 'added todo';
  }

  updateTodo(id: number, newTodo: Todo): string {
    const idx = this.todos.findIndex((td) => td.id === id);
    if (idx !== -1) {
      this.todos[idx] = newTodo;
      return 'sucess';
    }
    return 'not found';
  }

  deleteTodo(id: number): string {
    this.todos = this.todos.filter((td) => td.id !== id);
    return 'deleted';
  }
}
