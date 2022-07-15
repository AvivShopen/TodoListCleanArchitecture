import { DeleteTodoDto, TodoItem, UpdateTodoDto } from 'core';
import React from 'react';

type Props = TodoItem & {
  handleUpdate: (todoItem: UpdateTodoDto) => void;
  handleDelete: (todoItem: DeleteTodoDto) => void;
};

const TodoItem = (props: Props) => {
  return <div>TodoItem</div>;
};

export default TodoItem;
