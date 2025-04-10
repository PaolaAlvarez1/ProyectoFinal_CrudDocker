CREATE DATABASE IF NOT EXISTS crud_db;
USE crud_db;

CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  precio DECIMAL(10,2)
);

INSERT INTO productos (nombre, precio) VALUES
('Manzana', 1.25),
('Banana', 0.80),
('Naranja', 1.10);