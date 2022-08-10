CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users(
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  	name VARCHAR(60) NOT NULL,
  	email VARCHAR(45) NOT NULL,
  	password VARCHAR(100) NOT NULL,
  	isadm BOOLEAN
);

CREATE TABLE IF NOT EXISTS addresses(
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  	street VARCHAR(45) NOT NULL,
  	number VARCHAR(5) NOT NULL,
  	cep VARCHAR(8) NOT NULL,
  	user_id UUID NOT NULL,
  	FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE
	users
ADD UNIQUE
	(email);