CREATE DATABASE productsdb;
use productsdb;

CREATE TABLE product(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR(255) NOT NULL,
  description VARCHAR(400) NOT NULL,
  date DATE,
  income DECIMAL(10,2),
  price DECIMAL(10,2),
  balance DECIMAL(10,2),
  
);

describe product;