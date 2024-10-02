import React, { useState } from 'react';
import '../../styles/ALUMNOCSS/sidebarALUMNOPC.css';
import '../../styles/ALUMNOCSS/sidebarALUMNOMobile.css';
import { useNavigate } from 'react-router-dom';

const SidebarALUMNO = () => {
  
  return (
    <aside className="sidebar">
      <div className="logo-section">
        <a href="/"><img src="/img/C.E.B.E.LOGO.png" alt="Logo" className="logo-img" /></a>
        <a href="/"><h2>C.E.B.E</h2></a>
      </div>
      <div className="divider"></div>
      <nav className="menu">
        <ul>
          <li><a href="/perfil"><img src="/img/perfil.png" alt="Perfil" className="menu-icon" />Perfil</a></li>
          <li><a href="/anuncios"><img src="/img/anunciar.png" alt="Anuncios" className="menu-icon" />Anuncios</a></li>
          <li><a href="/cursos"><img src="/img/cursos.png" alt="Cursos" className="menu-icon" />Cursos</a></li>
          <li><a href="/calificaciones"><img src="/img/calificaciones.png" alt="Calificaciones" className="menu-icon" />Calificaciones</a></li>
          <li><a href="/logout"><img src="/img/logout.png" alt="Cerrar Sesion" className="menu-icon" />Cerrar Sesión</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarALUMNO;
