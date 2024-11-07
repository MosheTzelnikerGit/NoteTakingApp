// src/pages/EditNotePage.tsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../app/store';
import { updateNote } from '../features/notes/NotesSlice';
import { Note } from '../features/notes/NotesSlice';

const EditNotePage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // קבלת הפתק מה-store על פי מזהה ה-id
  const note = useSelector((state: RootState) =>
    state.notes.notes.find((note) => note.id === Number(id))
  );

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<'work' | 'personal' | 'shopping'>('personal');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setCategory(note.category);
    }
  }, [note]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedNote: Note = {
      ...note!,
      title,
      content,
      category,
    };

    dispatch(updateNote(updatedNote)); // עדכון הפתק ב-Redux store
    navigate('/notes'); // חזרה לדף הפתקים
  };

  if (!note) {
    return <p>הפתק לא נמצא</p>; // אם אין פתק עם מזהה זה, מציג הודעת שגיאה
  }

  return (
    <div>
      <h1>עריכת פתק</h1>
      <form onSubmit={handleSubmit}>
        <label>
          כותרת:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br />
        <label>
          תוכן:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <br />
        <label>
          קטגוריה:
          <select value={category} onChange={(e) => setCategory(e.target.value as 'work' | 'personal' | 'shopping')}>
            <option value="work">עבודה</option>
            <option value="personal">אישי</option>
            <option value="shopping">קניות</option>
          </select>
        </label>
        <br />
        <button type="submit">עדכן פתק</button>
      </form>
    </div>
  );
};

export default EditNotePage;
