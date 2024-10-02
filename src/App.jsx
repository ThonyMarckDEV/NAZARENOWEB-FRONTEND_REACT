import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './interfaces/Login';
import UIAlumno from './interfaces/ALUMNO/UIAlumno';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/estudiante" element={<UIAlumno />} />
      </Routes>
    </Router>
  );
}

export default App;
