CREATE
    DATABASE jumelco;
create table clientes
(
    IdCli      INT(5)       NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre     VARCHAR(150) NOT NULL,
    direccion  VARCHAR(200),
    telefono   INT(15),
    email      VARCHAR(50),
    contrasena VARCHAR(10)
);
CREATE TABLE servicios
(
    IdS    INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tipo   VARCHAR(200),
    opcion VARCHAR(100),
    description varchar(400),
    IdCliS int(5) not null

);
CREATE TABLE citas
(
    IdC           INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    IdCliC     INT(5) not null ,
    fecha         DATE   NOT NULL,
    observaciones TEXT(300)
);