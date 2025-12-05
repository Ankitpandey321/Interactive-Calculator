-- init.sql
CREATE DATABASE IF NOT EXISTS calculator_db;
USE calculator_db;

-- Create a simple logs table to store calculation records (example)
CREATE TABLE IF NOT EXISTS calc_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  expression VARCHAR(255) NOT NULL,
  result VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional example row
INSERT INTO calc_logs (expression, result) VALUES ('1+1', '2');
