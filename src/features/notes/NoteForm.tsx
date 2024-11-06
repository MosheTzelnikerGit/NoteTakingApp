import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from './NotesSlice';

const NoteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<'work' | 'personal' | 'shopping'>('work');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addNote({
      id: Date.now(),
      title,
      content,
      category,
      createdAt: new Date().toISOString(),
    }));
    setTitle('');
    setContent('');
    setCategory('work');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <select value={category} onChange={(e) => setCategory(e.target.value as typeof category)}>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="shopping">Shopping</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default NoteForm;
