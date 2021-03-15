CREATE
DATABASE jumelco;
create table clientes
(
    IdCli      INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre     VARCHAR(150) NOT NULL,
    direccion  VARCHAR(200),
    telefono   INT (15),
    email      VARCHAR(50),
    contraseña VARCHAR(10)
);
CREATE TABLE servicios
(
    IdS    INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200),
    tipo   VARCHAR(200)
);
CREATE TABLE citas
(
    IdC           INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    fecha         DATE NOT NULL,
    observaciones TEXT(300)
);