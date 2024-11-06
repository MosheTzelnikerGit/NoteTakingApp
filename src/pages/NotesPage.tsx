import React from 'react';
import NotesList from '../features/notes/NotesList';
import NoteForm from '../features/notes/NoteForm';

const NotesPage: React.FC = () => (
  <div>
    <h1>Notes</h1>
    <NoteForm />
    <NotesList />
  </div>
);

export default NotesPage;
