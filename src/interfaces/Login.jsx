import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirigir
import '../styles/loginPC.css';
import '../styles/loginMobile.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate(); // Inicializar useNavigate para redirección
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de la página por defecto.
    console.log("Formulario enviado"); // Para verificar si la función se ejecuta
  
    const loginData = {
      username: username,
      password: password,
    };
  
    console.log("Datos enviados:", loginData); // Verifica que los datos se están enviando correctamente
  
    try {
      const response = await fetch('https://nd34hw0m-8080.brs.devtunnels.ms/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Respuesta del servidor:", data); // Verifica la respuesta del servidor
  
      if (data.rol) {
        // Almacenar datos en LocalStorage
        localStorage.setItem('idUsuario', data.idUsuario);
        localStorage.setItem('username', data.username);
        localStorage.setItem('rol', data.rol);
        localStorage.setItem('correo', data.correo);
  
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
        alert(data.error || 'Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setNotification(`Error al iniciar sesión: ${error.message}`);
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
