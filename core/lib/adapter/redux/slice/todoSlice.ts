import { TodoItem, TodoList } from '../../../domain';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createTodo, deleteTodo, updateTodo } from '../thunk/todoThunk';

export type TodoState = TodoList;

const initialState: TodoState = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // TODO: Add reject cases for failed actions

    builder.addCase(
      createTodo.fulfilled,
      (state: TodoState, action: PayloadAction<TodoItem>) => {
        return [...state, action.payload];
      }
    );

    builder.addCase(
      deleteTodo.fulfilled,
      (state: TodoState, action: PayloadAction<TodoItem['id']>) => {
        return state.filter((todo) => todo.id !== action.payload);
      }
    );

    builder.addCase(
      updateTodo.fulfilled,
      (state: TodoState, action: PayloadAction<TodoItem | null>) => {
        const todoItem = action.payload;
        if (todoItem) {
          return state.map((todo) =>
            todo.id === todoItem.id ? todoItem : todo
          );
        }

        return state;
      }
    );
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
