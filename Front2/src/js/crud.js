import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../css/header.css';
import '../css/main.css';
import '../css/usuario.css';
import '../css/footer.css';

function Crud() {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        contrasena: '',
        identification_number: '',
        type_user: 'CLIENTE'
    });
    const [editUser, setEditUser] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const res = await axios.get('http://localhost:3001/usuario');
                setUsuarios(res.data.user);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };
        fetchUsuarios();
    }, []);

    const resetForm = () => {
        setNewUser({
            username: '',
            email: '',
            contrasena: '',
            identification_number: '',
            type_user: 'CLIENTE'
        });
        setEditUser(null);
    };

    const handleCloseForms = () => {
        resetForm();
        setShowAddForm(false);
        setShowEditForm(false);
    };

    const handleAddUser = async () => {
        try {
            const response = await axios.post('http://localhost:3001/usuario', newUser);
            if (response.data.success) {
                setUsuarios([...usuarios, newUser]);
                resetForm();
                setShowAddForm(false);
            } else {
                console.error('Error al agregar usuario:', response.data.message);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud de agregar usuario:', error);
        }
    };

    const handleUpdateUser = async () => {
        try {
            const response = await axios.put(`http://localhost:3001/usuario/${editUser.identification_number}`, editUser);
            if (response.data.success) {
                setUsuarios(usuarios.map(usuario => 
                    usuario.identification_number === editUser.identification_number ? editUser : usuario
                ));
                resetForm();
                setShowEditForm(false);
            } else {
                console.error('Error al editar usuario:', response.data.message);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud de actualización:', error);
        }
    };

    const editarUsuario = (usuario) => {
        setEditUser(usuario);
        setShowEditForm(true);
    };

    const eliminarUsuario = async (identification_number) => {
        try {
            const response = await axios.delete(`http://localhost:3001/usuario/${identification_number}`);
            if (response.data.success) {
                setUsuarios(usuarios.filter(usuario => usuario.identification_number !== identification_number));
            } else {
                console.error('Error al eliminar el usuario:', response.data.message);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud de eliminación:', error);
        }
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <h2>Lista de Usuarios - Bienvenido a la galeria del casco {currentUser ? currentUser.username : ''}</h2>
            <button className="btn btn-primary" onClick={() => {
                handleCloseForms();
                setShowAddForm(true);
            }}>
                Agregar Usuario
            </button>
            <button className="btn btn-danger" onClick={handleLogout}>
                Cerrar Sesión
            </button>

            {showAddForm && (
                <div className="login-box">
                    <h1>Agregar Usuario</h1>
                    <form className='formulario' onSubmit={handleAddUser}>
                        <label htmlFor="username">Nombre de Usuario</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={newUser.username}
                            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                            required
                            placeholder="Ingresa Nombre de Usuario"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            required
                            placeholder="Ingresa Email"
                        />
                        <label htmlFor="contrasena">Contraseña</label>
                        <input
                            type="password"
                            id="contrasena"
                            name="contrasena"
                            value={newUser.contrasena}
                            onChange={(e) => setNewUser({ ...newUser, contrasena: e.target.value })}
                            required
                            placeholder="Ingresa Contraseña"
                        />
                        <label htmlFor="identification_number">Número de Identificación</label>
                        <input
                            type="text"
                            id="identification_number"
                            name="identification_number"
                            value={newUser.identification_number}
                            onChange={(e) => setNewUser({ ...newUser, identification_number: e.target.value })}
                            required
                            placeholder="Ingresa Número de Identificación"
                        />
                        <label htmlFor="type_user">Tipo de Usuario</label>
                        <select
                            id="type_user"
                            name="type_user"
                            value={newUser.type_user}
                            onChange={(e) => setNewUser({ ...newUser, type_user: e.target.value })}
                        >
                            <option value="CLIENTE">CLIENTE</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                        <button type="submit" className="btn btn-success">Agregar Usuario</button>
                        <button type="button" className="btn btn-secondary" onClick={handleCloseForms}>Cancelar</button>
                    </form>
                </div>
            )}

            {showEditForm && editUser && (
                <div className="login-box">
                    <h1>Editar Usuario</h1>
                    <form className='formulario' onSubmit={handleUpdateUser}>
                        <label htmlFor="username">Nombre de Usuario</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={editUser.username}
                            onChange={(e) => setEditUser({ ...editUser, username: e.target.value })}
                            required
                            placeholder="Ingresa Nombre de Usuario"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={editUser.email}
                            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                            required
                            placeholder="Ingresa Email"
                        />
                        <label htmlFor="contrasena">Contraseña</label>
                        <input
                            type="password"
                            id="contrasena"
                            name="contrasena"
                            value={editUser.contrasena}
                            onChange={(e) => setEditUser({ ...editUser, contrasena: e.target.value })}
                            required
                            placeholder="Ingresa Contraseña"
                        />
                        <label htmlFor="identification_number">Número de Identificación</label>
                        <input
                            type="text"
                            id="identification_number"
                            name="identification_number"
                            value={editUser.identification_number}
                            onChange={(e) => setEditUser({ ...editUser, identification_number: e.target.value })}
                            required
                            placeholder="Ingresa Número de Identificación"
                        />
                        <label htmlFor="type_user">Tipo de Usuario</label>
                        <select
                            id="type_user"
                            name="type_user"
                            value={editUser.type_user}
                            onChange={(e) => setEditUser({ ...editUser, type_user: e.target.value })}
                        >
                            <option value="CLIENTE">CLIENTE</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                        <button type="submit" className="btn btn-success">Actualizar Usuario</button>
                        <button type="button" className="btn btn-secondary" onClick={handleCloseForms}>Cancelar</button>
                    </form>
                </div>
            )}

            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre de Usuario</th>
                        <th>Email</th>
                        <th>Tipo de Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id_user}>
                            <td>{usuario.id_user}</td>
                            <td>{usuario.username}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.type_user}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => editarUsuario(usuario)}>Editar</button>
                                <button className="btn btn-danger" onClick={() => eliminarUsuario(usuario.identification_number)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Crud;