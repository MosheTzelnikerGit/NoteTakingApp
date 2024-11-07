// src/features/notes/NotesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Note {
  id: number;
  title: string;
  content: string;
  category: 'work' | 'personal' | 'shopping';
  createdAt: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [
    {
      id: 1,
      title: 'דוגמה לפתק',
      content: 'זהו פתק לדוגמה.',
      category: 'personal',
      createdAt: new Date().toLocaleDateString(),
    },
  ],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
  },
});

export const { addNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
