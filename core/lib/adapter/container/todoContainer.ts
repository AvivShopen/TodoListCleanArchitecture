import InMemoryTodoRepository from '../../repository/memory';
import TodoRepository from '../../repository/TodoRepository';
import { TodoInteractor } from '../../useCase';
import { Container } from 'inversify';

export interface TodoDomain {
  Repository: string;
  Interactor: string;
}

export const TODO_DOMAIN: TodoDomain = {
  Repository: 'TodoRepository',
  Interactor: 'TodoInteractor',
};

export type CreateTodoContainerOptions = {
  interactorConstructor?: new (...args: never[]) => TodoInteractor;
  repositoryConstructor?: new (...args: never[]) => TodoRepository;
};

export function createTodoContainer(options?: CreateTodoContainerOptions) {
  const todoContainer = new Container();

  todoContainer
    .bind<TodoRepository>(TODO_DOMAIN.Repository)
    .to(options?.repositoryConstructor || InMemoryTodoRepository)
    .inSingletonScope();

  todoContainer
    .bind<TodoInteractor>(TODO_DOMAIN.Interactor)
    .to(options?.interactorConstructor || TodoInteractor);

  return todoContainer;
}
