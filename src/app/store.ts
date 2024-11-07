// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/notes/NotesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
