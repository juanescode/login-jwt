create database project_jwtt;
use project_jwtt;

create tabla login(
    username varchar(50) not null,
    password varchar(50) not null,
    primary key(username, password)
);

INSERT INTO login (username, password) VALUES
    ('user1', '1234'),
    ('user2', '1234'),
    ('user3', '1234'),
    ('user4', '1234');