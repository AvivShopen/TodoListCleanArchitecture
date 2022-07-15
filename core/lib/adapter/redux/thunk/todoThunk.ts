import {
  createTodoContainer,
  TODO_DOMAIN,
} from '../../../adapter/container/todoContainer';
import {
  CreateTodoDto,
  DeleteTodoDto,
  UpdateTodoDto,
} from '../../../repository';
import { TodoInteractor } from '../../../useCase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom } from 'rxjs';

const todoContainer = createTodoContainer();

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (todo: CreateTodoDto) => {
    const interactor = todoContainer.get<TodoInteractor>(
      TODO_DOMAIN.Interactor
    );

    const todoItem$ = interactor.create(todo);

    return await firstValueFrom(todoItem$);
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (todo: DeleteTodoDto) => {
    const interactor = todoContainer.get<TodoInteractor>(
      TODO_DOMAIN.Interactor
    );

    const todoItemId$ = interactor.delete(todo);

    return await firstValueFrom(todoItemId$);
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (todoId: UpdateTodoDto) => {
    const interactor = todoContainer.get<TodoInteractor>(
      TODO_DOMAIN.Interactor
    );

    const todoItem$ = interactor.update(todoId);

    return await firstValueFrom(todoItem$);
  }
);
