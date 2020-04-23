To create your own user in your database:  
CREATE USER 'hwj'@'localhost' IDENTIFIED BY 'pass123';  
GRANT ALL PRIVILEGES ON *.* TO 'hwj'@'localhost' WITH GRANT OPTION;  
FLUSH PRIVILEGES;  

Basic SQL commands, table and column setup, filling in the data:  
show databases;  
creater database HwJ;  
use HwJ;  
create table UAs(id integer, useragent varchar(200));  
create table users(uname varchar(50), passwd varchar(50));  
insert into users(uname, passwd) values("admin", "mypass");  

insert into UAs(id, useragent) values(1, "Firefox");  
insert into UAs(id, useragent) values(2, "IE");  
insert into UAs(id, useragent) values(3, "Chrome");  

Basic NoSQL commands, filling in the data:  

db  
use test1  

db.users.insertMany([  
   { id: 1, uname: "Admin", passwd: "admin_obviously" },  
   { id: 2, uname: "Vader", passwd: "darkside" },  
   { id: 3, uname: "Luke", passwd: "leia1" },  
]);  
