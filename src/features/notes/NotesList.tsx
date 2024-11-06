import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import NoteItem from './NoteItem';

const NotesList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const activeCategory = useSelector((state: RootState) => state.notes.activeCategory);
  
  const filteredNotes = activeCategory === 'all'
    ? notes
    : notes.filter(note => note.category === activeCategory);

  return (
    <div>
      {filteredNotes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
