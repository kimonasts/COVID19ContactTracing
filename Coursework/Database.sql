-- create a table
CREATE TABLE credentials(
    id INT PRIMARY KEY,
    firstName VARCHAR(20),
    surname VARCHAR(20),
    username VARCHAR(20),
    userPassword VARCHAR(40)
);
-- insert some values
INSERT INTO credentials VALUES (1,'Ryan', 'Mason', 'rmason', '123');
INSERT INTO credentials VALUES (2,'John', 'May', 'jmay', '12345');