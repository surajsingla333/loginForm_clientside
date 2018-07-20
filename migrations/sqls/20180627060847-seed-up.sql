/* Migration up-4 for tags table*/
/* Replace with your SQL commands */

CREATE TABLE tags (
    `userID` INT NOT NULL,
    `jobID` VARCHAR(255) NOT NULL,
    FOREIGN KEY (userID) REFERENCES users2(u_id),
      
    FOREIGN KEY (jobID) REFERENCES jobs (`Job ID`) 
);