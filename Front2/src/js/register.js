import React, { useState } from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [identification_number, setIdentificationNumber] = useState(''); 
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/usuario', {
                username: username,
                email: email,
                contrasena: password,
                identification_number: identification_number || 'Sin registro',
            });

            if (response.data.success) {
                setMessage('Usuario Registrado');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud. ', error);
            setMessage('Error al realizar la solicitud.');
        }
    };

    return (
        <div className="login-box">
            <a href="/">
            <img src="img/logo.png" className="avatar" alt="logo" />
            </a>
            <h1>Registro</h1>

            <form className='formulario' onSubmit={handleRegister}>
                <label htmlFor="username">Nombre de Usuario</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Ingresa Nombre de Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="email">Correo electronico</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Ingresa correo electronico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <label htmlFor="identification_number">Número de Identificación</label>
                <input
                    type="text"
                    id="identification_number"
                    placeholder="Ingresa Número de Identificación"
                    value={identification_number}
                    onChange={(e) => setIdentificationNumber(e.target.value)}
                    required
                />
                <input type="submit" value="Registrarse" />
            </form>
            <p>{message}</p>
            <Link to="/login">Ya tienes cuenta? Inicia Sesión</Link>
        </div>
    );
};

export default Register;