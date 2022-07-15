import { configureStore } from 'core/lib/adapter/redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/** Hooks */

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
