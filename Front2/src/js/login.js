import React, { useState } from 'react';
import '../css/login.css';
import {Link, useNavigate} from 'react-router-dom';

import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        try {
            const response = await axios.post('http://localhost:3001/login', {
                username: username,
                contrasena: password,
            });

            if (response.data.success) {
                localStorage.setItem('currentUser', JSON.stringify(response.data.user));
                setMessage('Inicio de sesión exitoso');
                navigate('/crud')
            } else {
                setMessage('Credenciales incorrectas.');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud.', error);
            setMessage('Error al realizar la solicitud.');
        }
    };
    
    return (
        <div className="login-box">
            <a href="/">
            <img src="img/logo.png" className="avatar" alt="logo" />
            </a>
            <h1>Inicio de Sesión</h1>


            <form className='formulario' onSubmit={handleLogin}>
                <label htmlFor="username">Nombre de Usuario</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Ingresa Nombre de Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Ingresa Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input type="submit" value="Iniciar Sesión" />
            </form>
                <p>{message}</p>
                <a href="#">Olvidaste la Contraseña?</a><br />
                <Link to="/register">¿No tienes una cuenta? Regístrate aquí</Link>
            
        </div>
    );
};


export default Login;