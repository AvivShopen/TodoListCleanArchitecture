import { createTodo } from 'core/lib/adapter/redux/thunk/todoThunk';
import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './store';

function App() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      createTodo({
        text: 'Todo 1',
        description: 'Todo 1 description',
        due: new Date().toISOString(),
        completed: false,
      })
    );
  }, []);

  return <div className="App"></div>;
}

export default App;
