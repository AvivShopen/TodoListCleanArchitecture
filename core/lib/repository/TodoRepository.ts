import 'reflect-metadata';
import { TodoList, TodoItem } from '../domain';
import { Observable } from 'rxjs';

export type CreateTodoDto = Omit<TodoItem, 'id'>;
export type UpdateTodoDto = Pick<TodoItem, 'id'> & Partial<TodoItem>;
export type DeleteTodoDto = TodoItem['id'];

export default interface TodoRepository {
  getAll(): Observable<TodoList>;
  create(todo: CreateTodoDto): Observable<TodoItem>;
  update(todo: UpdateTodoDto): Observable<TodoItem | null>;
  delete(todoId: DeleteTodoDto): Observable<TodoItem['id']>;
}
