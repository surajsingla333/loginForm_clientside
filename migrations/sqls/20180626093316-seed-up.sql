/* Migration up-1 for users2 table*/
/* Replace with your SQL commands */


CREATE TABLE users2 (
    `u_id` INT NOT NULL auto_increment PRIMARY KEY,
    `username` VARCHAR(225) UNIQUE NOT NULL,
    `name` VARCHAR(225),
    `type` VARCHAR(225)
);


