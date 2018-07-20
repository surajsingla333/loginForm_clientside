/* Migration up-2 for usersDetails table*/
/* Replace with your SQL commands */


CREATE TABLE usersDetails (
    `id` INT NOT NULL auto_increment PRIMARY KEY,
    `ud_id` INT NOT NULL UNIQUE,
    `post` VARCHAR(225) NOT NULL,
    `experience` INT,
    `address` VARCHAR(255) NOT NULL,
    FOREIGN KEY (ud_id) REFERENCES users2(u_id)
);
