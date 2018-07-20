/* Migration up-3 for jobs table*/
/* Replace with your SQL commands */

CREATE TABLE jobs (
    `Job ID` VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
    `Job title` VARCHAR(255) NOT NULL UNIQUE )


    