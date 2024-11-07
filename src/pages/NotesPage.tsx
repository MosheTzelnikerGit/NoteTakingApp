// src/pages/NotesPage.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import NotesList from '../features/notes/NotesList';
import { Link } from 'react-router-dom';

const NotesPage: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <div>
      <h1>List of notes</h1>
      <Link to="/notes/new">
        <button>Create a new note</button>
      </Link>
      {notes.length > 0 ? (
        <NotesList notes={notes} />
      ) : (
        <p>No notes found</p>
      )}
    </div>
  );
};

export default NotesPage;
