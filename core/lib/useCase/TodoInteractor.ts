import TodoRepository, {
  CreateTodoDto,
  DeleteTodoDto,
  UpdateTodoDto,
} from '../repository/TodoRepository';
import { inject, injectable } from 'inversify';

@injectable()
export class TodoInteractor {
  constructor(
    @inject('TodoRepository')
    public todoRepo: TodoRepository
  ) {}

  getAll() {
    return this.todoRepo.getAll();
  }

  create(todo: CreateTodoDto) {
    return this.todoRepo.create(todo);
  }

  update(todo: UpdateTodoDto) {
    return this.todoRepo.update(todo);
  }

  delete(todoId: DeleteTodoDto) {
    return this.todoRepo.delete(todoId);
  }
}
