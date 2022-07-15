import 'reflect-metadata';
import {
  configureStore as configureStoreToolkit,
  Middleware,
} from '@reduxjs/toolkit';
import rootReducer from './slice';
import { createLogger } from 'redux-logger';

export function configureStore() {
  return configureStoreToolkit({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      process.env.NODE_ENV !== 'production'
        ? getDefaultMiddleware().concat(createLogger())
        : getDefaultMiddleware(),
  });
}
