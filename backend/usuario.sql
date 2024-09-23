
create database e_commerce;

USE e_commerce;

drop table usuario;

CREATE TABLE usuario (
		id_user INT auto_increment primary key UNIQUE,
		identification_type VARCHAR(2) NOT NULL default 'nn',
		identification_number VARCHAR(20) NOT NULL default 'Sin registro',
		type_user VARCHAR(15) NOT NULL default 'CLIENTE',
		username VARCHAR(50) NOT NULL UNIQUE,
		surnames VARCHAR(50) NOT NULL default 'Sin registro',
		birth_date DATE NOT NULL default '0-0-0',
		email VARCHAR(100) NOT NULL UNIQUE,
		address VARCHAR(100) DEFAULT 'Sin registro',
		phone VARCHAR(20) DEFAULT 'Sin registro',
		city VARCHAR(50) NOT NULL DEFAULT 'Sin registro',
		department VARCHAR(50) NOT NULL DEFAULT 'Sin registro',
        contrasena varchar(50) not null
);

INSERT INTO usuario (identification_type, identification_number, type_user, username, surnames, birth_date, email, address, phone, city, department, contrasena)
VALUES
('CC', 1020819439, 'ADMIN', 'Jaime', 'Joya', '1996-10-01', 'jimmyajc.joya@gmail.com', 'Carrera 101 #74a - 25', 3193864617, 'BOGOTA', 'BOGOTA', '1234'),
('TI', 534581045, 'ADMIN', 'MARIA', 'GONZALEZ', '1996-11-24', 'maria.gonzalez@example.com', 'CALLE 145 N 10-30', 3134783487, 'SOACHA', 'CUNDINAMARCA', '1346'),
('CC', 123456789, 'CLIENTE', 'CARLOS', 'RAMIREZ', '1989-12-24', 'carlos.ramirez@example.com', 'CALLE 72 N 20-45', 3144253896, 'SIBATE', 'CUNDINAMARCA', '134679'),
('CC', 204578925, 'CLIENTE', 'LAURA', 'FERNANDEZ', '1989-12-24', 'laura.fernandez@example.com', 'CALLE 63 N 20-45', 3144257846, 'LA MESA', 'CUNDINAMARCA', '794613');



-- ALTER TABLE usuario
--    MODIFY COLUMN type_user VARCHAR(15) DEFAULT 'CLIENTE';
   
   
   
   select * from usuario;