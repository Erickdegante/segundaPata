DROP DATABASE IF EXISTS segundaPata;

CREATE DATABASE segundaPata;

USE segundaPata;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  descrip varchar(150) NOT NULL,
  price varchar(50) NOT NULL,
  category varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  vendor varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

INSERT INTO items (name, descrip, price, category, email, vendor) VALUES ("hueso mordido", "Hueso de dinosaurio súper sabroso, listo para morder", "$10.00", "juguetes", "amanda@cameil.com", "Juanito García");
INSERT INTO items (name, descrip, price, category, email, vendor) VALUES ("camita suave", "50cm de diámetro, solo un dueño anterior", "$30.00", "camitas", "pamela@cameil.com", "Pamela Costa");
INSERT INTO items (name, descrip, price, category, email, vendor) VALUES ("casita de madera", "Para perro pequeño. Nuestro cachorro creció demasiado rápido!", "$10.00", "accesorios", "arnold@cameil.com", "Arnold Guadarrama");
INSERT INTO items (name, descrip, price, category, email, vendor) VALUES ("comida pedigrí", "bolsa tamaño 400 oz", "$50.00", "accesorios", "amanda@cameil.com", "Amanda de la Costa");
INSERT INTO items (name, descrip, price, category, email, vendor) VALUES ("zapato viejo", "de la marca nike, perfecto para morder, sabor a queso", "$10.00", "juguetes", "alicia@cameil.com", "Alicia Maravillas");
INSERT INTO items (name, descrip, price, category, email, vendor) VALUES ("suéter a rayas", "tamaño Chihuahua, casi nuevo", "$25.00", "ropa", "lalord@cameil.com", "Eduardo de León");
