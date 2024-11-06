import React from 'react';
import { Note } from './NotesSlice';

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <small>Category: {note.category}</small>
      <small>Created At: {note.createdAt}</small>
    </div>
  );
};

export default NoteItem;
