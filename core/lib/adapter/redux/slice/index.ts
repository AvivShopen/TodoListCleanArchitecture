import todoReducer from './todoSlice';
import { combineReducers } from 'redux';

export default combineReducers({ todos: todoReducer });
