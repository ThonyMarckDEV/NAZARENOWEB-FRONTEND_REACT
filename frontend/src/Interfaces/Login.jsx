import React, { useState } from 'react';
import '../styles/loginPC.css';
import '../styles/loginMobile.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginData = {
      username: username,
      password: password
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      const data = await response.json();
  
      if (data.rol) {
        // Redirigir según el rol
        switch (data.rol) {
          case 'ADMIN':
            window.location.href = '/admin';
            break;
          case 'ESTUDIANTE':
            window.location.href = '/estudiante';
            break;
          case 'DOCENTE':
            window.location.href = '/docente';
            break;
          case 'APODERADO':
            window.location.href = '/apoderado';
            break;
          default:
            alert('Error en el rol');
        }
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      <h1>C.E.B.E</h1>
      
      <div id="notification" className={`notification ${notification && 'show'}`}>
        {notification}
      </div>
      
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br /><br />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /><br />
          <input type="submit" value="Iniciar Sesión" />
        </form>
      </div>

      <style>{`
        .notification {
          display: none;
          color: red;
        }
        .show {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Login;
