import React, { useState } from 'react';
import '../../styles/ALUMNOCSS/UIAlumnoPC.css';
import '../../styles/ALUMNOCSS/UIAlumnoMobile.css';
import Sidebar from './sidebarALUMNO';

const UIAlumno = () => {
  
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        {/* Aquí va el contenido de los cursos */}
        <h1>Cursos</h1>
        <p>Contenido de los cursos...</p>
      </div>
    </div>
  );
};

export default UIAlumno;
