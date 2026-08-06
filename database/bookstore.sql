-- Create Database
CREATE DATABASE IF NOT EXISTS bookstore;

USE bookstore;

--------------------------------------------------
-- Books Table
--------------------------------------------------

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(500),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--------------------------------------------------
-- Orders Table
--------------------------------------------------

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    items JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--------------------------------------------------
-- Sample Books
--------------------------------------------------

INSERT INTO books (title, author, category, price, image, description)
VALUES

(
'Clean Code',
'Robert C. Martin',
'Programming',
699.00,
'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
'A handbook of agile software craftsmanship.'
),

(
'The Pragmatic Programmer',
'Andrew Hunt',
'Programming',
799.00,
'https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg',
'Classic book for professional programmers.'
),

(
'Java: The Complete Reference',
'Herbert Schildt',
'Programming',
899.00,
'https://m.media-amazon.com/images/I/81N7FmJhbhL.jpg',
'Comprehensive guide to Java programming.'
),

(
'Learning React',
'Alex Banks',
'Web Development',
599.00,
'https://m.media-amazon.com/images/I/71wqP5M5HPL.jpg',
'Modern React development.'
),

(
'Docker Deep Dive',
'Nigel Poulton',
'DevOps',
650.00,
'https://m.media-amazon.com/images/I/81D4Z7f5LOL.jpg',
'Complete Docker guide.'
),

(
'Kubernetes Up & Running',
'Brendan Burns',
'DevOps',
950.00,
'https://m.media-amazon.com/images/I/91QKQ7KQHPL.jpg',
'Learn Kubernetes from scratch.'
),

(
'AWS Certified Solutions Architect',
'Ben Piper',
'Cloud',
850.00,
'https://m.media-amazon.com/images/I/81pJ+8R5q+L.jpg',
'AWS Certification Guide.'
),

(
'Python Crash Course',
'Eric Matthes',
'Programming',
720.00,
'https://m.media-amazon.com/images/I/71NUZ+rHNFL.jpg',
'Learn Python quickly.'
);