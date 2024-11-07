// src/features/notes/NoteItem.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Note } from './NotesSlice';

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p><strong>Category:</strong> {note.category}</p>
      <p><strong>Creation date:</strong> {note.createdAt}</p>
      <Link to={`/notes/${note.id}`}>
        <button>Edited</button>
      </Link>
    </div>
  );
};

export default NoteItem;
