DROP DATABASE IF EXISTS shonenStrong_db;
CREATE DATABASE shonenStrong_db;

USE shonenStrong_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(40) NOT NULL,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  nickname VARCHAR(40),
  email VARCHAR(40) NOT NULL UNIQUE,
  password VARCHAR(40) NOT NULL,
  Recommended INT DEFAULT 0,
  CurrentWorkout_id INT DEFAULT 0,
  FOREIGN KEY (Recommended) REFERENCES rec_workout(id) ON DELETE SET NULL,
  FOREIGN KEY (CurrentWorkout_id) REFERENCES goal_tracker(id) ON DELETE SET NULL
);

CREATE TABLE animechars (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  charname VARCHAR(40) NOT NULL,
  description TEXT NOT NULL,
  recworkout_id INT DEFAULT 0,
  FOREIGN KEY (recworkout_id) REFERENCES rec_workout(id) ON DELETE SET NULL
);

CREATE TABLE exercises (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(40) NOT NULL,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  nickname VARCHAR(40),
  email VARCHAR(40) NOT NULL UNIQUE,
  password VARCHAR(40) NOT NULL,
  Recommended INT DEFAULT 0,
  CurrentWorkout_id INT DEFAULT 0,
  FOREIGN KEY (Recommended) REFERENCES rec_workout(id) ON DELETE SET NULL,
  FOREIGN KEY (CurrentWorkout_id) REFERENCES goal_tracker(id) ON DELETE SET NULL
);