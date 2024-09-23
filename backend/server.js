import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());


//conexion a la base de datos mysql
const db =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'e_commerce',
});


db.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos MySQL')
    }
});



// ruta para manejar el inicio de sesion
app.post('/login', (req, res) => {
    const { username, contrasena } = req.body;

    const query = 'SELECT * FROM usuario WHERE username = ? AND contrasena = ?';
    db.query(query, [username, contrasena], (err, result) => {
        if (err) {
            console.error('Error en la consulta de la base de datos:', err);
            return res.status(500).send({error: 'Error en la consulta de la base de datos', details: err.message});
        }

        if (result.length > 0) {
            res.send({success: true, message: 'Inicio de sesión exitoso'});
        } else {
            res.send({success: false, message: 'Credenciales incorrectas.'});
        }
    });
});

// Ruta para obtener todos los datos de usuario
app.get('/usuario', (req, res) => {
    const {identification_number} = req.params;

    const query = 'SELECT * FROM usuario';
    db.query(query, (err, result) =>{
        if (err){
            console.error('Error en la consulta de la base de datos:', err);
            return res.status(500).send({ error: 'Error en la consulta de la base de datos', details: err.message });
        }
        if (result.length > 0){
            res.send({success: true, user:result});
        } else {
            res.send({ success: false, message:'Error en la base de datos TEST', details: err.message});
        }
    });
});
// Ruta para obtener detalles del usuario por número de identificación
app.get('/usuario/:identification_number', (req, res) => {
    const { identification_number } = req.params;

    const query = 'SELECT * FROM usuario WHERE identification_number = ?';
    db.query(query, [identification_number], (err, result) => {
        if (err) {
            console.error('Error en la consulta de la base de datos:', err);
            return res.status(500).send({ error: 'Error en la consulta de la base de datos', details: err.message });
        }

        if (result.length > 0) {
            res.send({ success: true, user: result[0] });
        } else {
            res.send({ success: false, message: 'Usuario no encontrado.' });
        }
    });
});

// Ruta para crear usuario
app.post('/usuario', (req, res) => {
    const { 
        username,
        email, 
        contrasena,
        identification_number
    } = req.body;

    // Verificar si el correo ya existe
    const checkEmailQuery = 'SELECT * FROM usuario WHERE email = ?';
    db.query(checkEmailQuery, [email], (err, result) => {
        if (err) {
            console.error('Error en la consulta de la base de datos:', err);
            return res.status(500).send({ error: 'Error en la consulta de la base de datos', details: err.message });
        }

        if (result.length > 0) {
            return res.send({ success: false, message: 'El correo electrónico ya está registrado.' });
        }

        // Verificar si el nombre de usuario ya existe
        const checkUsernameQuery = 'SELECT * FROM usuario WHERE username = ?';
        db.query(checkUsernameQuery, [username], (err, result) => {
            if (err) {
                console.error('Error en la consulta de la base de datos:', err);
                return res.status(500).send({ error: 'Error en la consulta de la base de datos', details: err.message });
            }

            if (result.length > 0) {
                return res.send({ success: false, message: 'El nombre de usuario ya está registrado.' });
            }

            // Si el correo y el nombre de usuario no existen, proceder a insertar
            const query = `
                INSERT INTO usuario (username, email, contrasena, identification_number) 
                VALUES (?, ?, ?, ?)
            `;

            db.query(query, [username, email, contrasena, identification_number], (err, result) => {
                if (err) {
                    console.error('Error en la inserción de datos:', err);
                    return res.status(500).send({ error: 'Error en la inserción de datos', details: err.message });
                }
                res.send({ success: true, message: 'Usuario creado exitosamente' });
            });
        });
    });
});


//Ruta para actualizar usuarios 
app.put('/usuario/:id', (req, res) => {
    const userId = req.params.id; // ID del usuario que se va a actualizar
    const { username, email, contrasena, identification_number, type_user } = req.body;

    const query = `
        UPDATE usuario
        SET username = ?, email = ?, contrasena = ?, type_user = ?
        WHERE identification_number = ?
    `;

    db.query(query, [username, email, contrasena, type_user, identification_number], (err, result) => {
        if (err) {
            console.error('Error en la actualización de datos:', err);
            return res.status(500).send({ error: 'Error en la actualización de datos', details: err.message });
        }

        if (result.affectedRows > 0) {
            res.send({ success: true, message: 'Usuario actualizado exitosamente' });
        } else {
            res.send({ success: false, message: 'Usuario no encontrado' });
        }
    });
});


// eliminar un usuario 
app.delete('/usuario/:identification_number', (req, res) => {
    const { identification_number } = req.params;

    const query = 'DELETE FROM usuario WHERE identification_number = ?';
    db.query(query, [identification_number], (err, result) => {
        if (err) {
            console.error('Error en la consulta de la base de datos:', err);
            return res.status(500).send({ error: 'Error en la consulta de la base de datos', details: err.message });
        }

        if (result.affectedRows > 0) {
            res.send({ success: true, message: 'Usuario eliminado exitosamente.'});
        } else {
            res.send({ success: false, message: 'Usuario no encontrado.' });
        }
    });
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});