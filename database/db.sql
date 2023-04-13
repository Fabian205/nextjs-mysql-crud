CREATE DATABASE productsdb;
use productsdb;

CREATE TABLE product(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR(255) NOT NULL,
  description VARCHAR(400) NOT NULL,
  price DECIMAL(10,2),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe product;