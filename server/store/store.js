import { configureStore } from '@reduxjs/toolkit';
import chatSlice from './../../feature/homepage/slice/chatSlice';

export const store = configureStore({
  reducer: {
    chat: chatSlice,
  },
});
