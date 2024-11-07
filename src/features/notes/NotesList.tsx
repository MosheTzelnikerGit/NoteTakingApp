// src/features/notes/NotesList.tsx

import React from 'react';
import NoteItem from './NoteItem';
import { Note } from './NotesSlice';  // ייבוא של Note מהממשק

interface NotesListProps {
  notes: Note[];  // הגדרת notes כ-array של Note
}

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
