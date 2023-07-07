DROP DATABASE IF EXISTS shonenStrong_db;
CREATE DATABASE shonenStrong_db;

-- USE shonenStrong_db;

-- remove refeerence from users for recworkout and goaltracker

-- CREATE TABLE users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   username VARCHAR(40) NOT NULL,
--   firstname VARCHAR(40) NOT NULL,
--   lastname VARCHAR(40) NOT NULL,
--   nickname VARCHAR(40),
--   email VARCHAR(40) NOT NULL UNIQUE,
--   password VARCHAR(40) NOT NULL,
--   Recommended INT DEFAULT 0,
--   CurrentWorkout_id INT DEFAULT 0,
-- );

-- -- CREATE TABLE rec_workout (
-- --   id INT AUTO_INCREMENT PRIMARY KEY,
-- --   user_id INT,
-- --   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
-- -- );

-- -- CREATE TABLE animechars (
-- --   id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
-- --   charname VARCHAR(40) NOT NULL,
-- --   description TEXT NOT NULL,
-- --   recworkout_id INT DEFAULT 0,
-- --   FOREIGN KEY (recworkout_id) REFERENCES rec_workout(id) ON DELETE SET NULL
-- -- );

-- -- CREATE TABLE exercises (
-- --   id INT AUTO_INCREMENT PRIMARY KEY,
-- --   weights TEXT NOT NULL,
-- --   stretching TEXT NOT NULL,
-- --   cardio TEXT NOT NULL,
-- --   push TEXT NOT NULL,
-- --   pull TEXT NOT NULL,
-- -- );


-- -- CREATE TABLE goaltracker (
-- --   id INT AUTO_INCREMENT PRIMARY KEY,
-- --   start_date DATE NOT NULL,
-- --   weight INT NOT NULL,
-- --   height INT NOT NULL,
-- --   reps INT NOT NULL,
-- --   usercurrwork_id TEXT,
-- --   rectracker_id INT DEFAULT 0,
-- --   FOREIGN KEY (rectracker_id) REFERENCES rec_workout(id) ON DELETE SET NULL,
-- --   Foreign Key (usercurrwork_id) REFERENCES users(id) ON DELETE SET NULL
-- -- );


-- -- CREATE TABLE workout (
-- --   id INT AUTO_INCREMENT PRIMARY KEY,
-- --   workoutname VARCHAR(30) NOT NULL,
-- --   difficulty INT NOT NULL,
-- --   recworkout_id VARCHAR(30),
-- --   Animecharsworkout_id INT DEFAULT 0,
-- --   goalWork_id INT DEFAULT 0,
-- --   FOREIGN KEY (recworkout_id) REFERENCES rec_workout(id) ON DELETE SET NULL,
-- --   FOREIGN KEY (Animecharsworkout_id) REFERENCES animechars(id) ON DELETE SET NULL,
-- --   FOREIGN KEY (goalWork_id) REFERENCES goaltracker(id) ON DELETE SET NULL
-- -- );

