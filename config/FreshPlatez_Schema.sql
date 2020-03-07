DROP DATABASE IF EXISTS `FreshPlatez`;
CREATE DATABASE `FreshPlatez`;

USE `FreshPlatez`;

CREATE TABLE meals (
  id INT NOT NULL AUTO_INCREMENT,
  short_description VARCHAR(75) NOT NULL,
  long_description	VARCHAR(255) NOT NULL,
  price_small DECIMAL(10,2) NOT NULL,
  price_large DECIMAL(10,2) NOT NULL,
  ingredients TEXT NOT NULL,
  calories_small  VARCHAR(15) NOT NULL,
  calories_large VARCHAR(15) NOT NULL,
  lead_time INT NOT NULL,
  image_name VARCHAR(150) NOT NULL,
  reheat_time TIME NULL,
  is_active BOOLEAN DEFAULT TRUE NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);


CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_email VARCHAR(100) UNIQUE NOT NULL,
  user_password	VARCHAR(255) NOT NULL,
  Fname VARCHAR(50) NOT NULL,
  Lname VARCHAR(50) NOT NULL,
  allergies VARCHAR(255) NOT  NULL,
  favorites VARCHAR(255) NOT NULL,
  is_logged_on BOOLEAN Default FALSE NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE NOT NULL,
  email VARCHAR(100) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  quanity INT NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  notes VARCHAR(255) NOT NULL,
  order_status VARCHAR(45) NOT NULL,
  delivery_date datetime NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE order_details (
  id INT NOT NULL AUTO_INCREMENT,
  order_id INT NOT NULL,
  meal_id INT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quanity INT NOT NULL,
  meal_status VARCHAR(45) NOT NULL,
  delivery_date DATETIME NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

alter table order_details ADD CONSTRAINT fk_order_Id FOREIGN KEY(order_id) references orders(id);
alter table orders ADD CONSTRAINT fk_user_id FOREIGN KEY(user_id) references users(id);