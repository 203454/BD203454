ALTER TABLE Mascota ADD (motivoIngreso varchar(40))


INSERT INTO Mascota (nombre,tipo,fechaIngreso,motivoIngreso,id_duenio) values ('Oso','Pastor Aleman', '28 de Octubre', 'bañio',1);
INSERT INTO Mascota (nombre,tipo,fechaIngreso,motivoIngreso,id_duenio) values ('Zeus','Gato Angora', '10 de Octubre', 'zarna',2);
INSERT INTO Mascota (nombre,tipo,fechaIngreso,motivoIngreso,id_duenio) values ('Bola de Nieve','French', '8 de Octubre', 'bañio',1);

DROP TABLE IF EXISTS producto;
CREATE TABLE Duenio (
                        id_duenio IDENTITY NOT NULL PRIMARY KEY,
                        nombre varchar(40) NOT NULL,
                        telefono integer,
                        direccion varchar(40),
                        mascotaId INTEGER
);

INSERT INTO Duenio (nombre,telefono,direccion}) values ('Omar',967123, 'Sancris');
INSERT INTO Duenio (nombre,telefono,direccion}) values ('Leonardo',961123, 'Tuchtlan');
INSERT INTO Duenio (nombre,telefono,direccion}) values ('Ciro',967234, 'Sancrisbosnia');