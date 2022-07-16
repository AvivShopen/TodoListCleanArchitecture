import { TodoItem, TodoList } from '../../domain';
import { injectable } from 'inversify';
import { Observable, of, pipe } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import TodoRepository, {
  CreateTodoDto,
  DeleteTodoDto,
  UpdateTodoDto,
} from '../TodoRepository';

@injectable()
export default class InMemoryTodoRepository implements TodoRepository {
  static TODO_COUNT = 0;
  readonly _todoList: TodoList;

  constructor() {
    this._todoList = [];
  }

  getAll(): Observable<TodoList> {
    return of(null).pipe(map(() => this._todoList));
  }

  create(todo: CreateTodoDto): Observable<TodoItem> {
    const todoItem$ = of(todo).pipe(
      map((todo) => ({
        id: InMemoryTodoRepository.TODO_COUNT++,
        ...todo,
      })),
      tap((todoItem) => this._todoList.push(todoItem))
    );

    return todoItem$;
  }

  update(todo: UpdateTodoDto): Observable<TodoItem | null> {
    return of(todo).pipe(
      map((todo) => {
        const itemIndex = this._todoList.findIndex(
          (todoItem) => todoItem.id === todo.id
        );

        if (itemIndex < 0) {
          return null;
        }

        const updatedTodoItem: TodoItem = {
          ...this._todoList[itemIndex],
          ...todo,
        };

        this._todoList[itemIndex] = updatedTodoItem;

        return updatedTodoItem;
      })
    );
  }

  delete(todoId: DeleteTodoDto): Observable<TodoItem['id']> {
    return of(todoId).pipe(
      map((todoId) => {
        const itemIndex = this._todoList.findIndex(
          (todoItem) => todoItem.id === todoId
        );

        if (itemIndex >= 0) {
          this._todoList.splice(itemIndex, 1);
        }

        return itemIndex;
      })
    );
  }
}
