import { TodoItem, TodoList } from '../../domain';
import { injectable } from 'inversify';
import { Observable } from 'rxjs';
import TodoRepository, {
  CreateTodoDto,
  DeleteTodoDto,
  UpdateTodoDto,
} from '../TodoRepository';
import axios, { AxiosResponse } from 'axios';

const REMOTE_URL = process.env.SERVER_URL || 'http://localhost:8080/api';

@injectable()
export default class RemoteTodoRepository implements TodoRepository {
  getAll(): Observable<TodoList> {
    return new Observable<TodoList>((observer) => {
      axios
        .get<TodoList, AxiosResponse<TodoList>, {}>(`${REMOTE_URL}/todos`)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  create(todo: CreateTodoDto): Observable<TodoItem> {
    return new Observable<TodoItem>((observer) => {
      axios
        .post<TodoItem, AxiosResponse<TodoItem>, CreateTodoDto>(
          `${REMOTE_URL}/todos`,
          todo
        )
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  update(todo: UpdateTodoDto): Observable<TodoItem | null> {
    return new Observable<TodoItem | null>((observer) => {
      axios
        .put<TodoItem | null, AxiosResponse<TodoItem | null>, UpdateTodoDto>(
          `${REMOTE_URL}/todos/${todo.id}`,
          todo
        )
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  delete(todoId: DeleteTodoDto): Observable<TodoItem['id']> {
    return new Observable<TodoItem['id']>((observer) => {
      axios
        .delete<TodoItem['id'], AxiosResponse<TodoItem['id']>, DeleteTodoDto>(
          `${REMOTE_URL}/todos/${todoId}`
        )
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
