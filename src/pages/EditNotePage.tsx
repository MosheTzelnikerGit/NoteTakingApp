import React from 'react';
import { useParams } from 'react-router-dom';

const EditNotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Edit Note {id}</h1>
      {/* Here you would render NoteForm with the current note data */}
    </div>
  );
};

export default EditNotePage;
