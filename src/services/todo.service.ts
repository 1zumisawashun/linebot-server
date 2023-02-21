import { Todo } from "../models/todo.model";

// NOTE:prisma, postgreSQLを使わない実装
export class TodoService {
  TODOS: Todo[] = [];
  constructor() {}

  getTodo(): Todo[] {
    return this.TODOS;
  }

  createTodo(text: string): Todo {
    const newTodo = new Todo(Math.random().toString(), text);
    this.TODOS.push(newTodo);
    return newTodo;
  }

  updateTodo(text: string, todoId: string): Todo {
    const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) throw new Error("対象のTODOが見つかりませんでした。");
    this.TODOS[todoIndex] = new Todo(todoId, text);
    return this.TODOS[todoIndex];
  }

  deleteTodo(todoId: string): Todo[] {
    const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) throw new Error("対象のTODOが見つかりませんでした。");
    this.TODOS.splice(todoIndex, 1);
    return this.TODOS;
  }
}
