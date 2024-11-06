import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NotesPage from './pages/NotesPage';
import NewNotePage from './pages/NewNotePage';
import EditNotePage from './pages/EditNotePage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/notes/new" element={<NewNotePage />} />
      <Route path="/notes/:id" element={<EditNotePage />} />
    </Routes>
  </Router>
);

export default App;
