import {configureStore} from '@reduxjs/toolkit';
import productReducer from './product/productSlice';
import toastReducer from './toast/toastSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    toast: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
