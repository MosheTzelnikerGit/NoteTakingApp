// src/pages/NewNotePage.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../features/notes/NotesSlice';
import { Note } from '../features/notes/NotesSlice';

const NewNotePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<'work' | 'personal' | 'shopping'>('personal');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
      category,
      createdAt: new Date().toLocaleDateString(),
    };

    dispatch(addNote(newNote)); 
    navigate('/notes'); 
  };

  return (
    <div>
      <h1>Create a new note</h1>
      <form onSubmit={handleSubmit}>
        <label>
        Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br />
        <label>
        Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <br />
        <label>
        Category:
          <select value={category} onChange={(e) => setCategory(e.target.value as 'work' | 'personal' | 'shopping')}>
            <option value="work">work</option>
            <option value="personal">personal</option>
            <option value="shopping">shopping</option>
          </select>
        </label>
        <br />
        <button type="submit">Add a note</button>
      </form>
    </div>
  );
};

export default NewNotePage;
