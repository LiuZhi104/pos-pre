-- **数据库级别：**  
--  显示所有数据库  
show databases;
--  进入某个数据库  
use student;
--  创建一个数据库  
create database 库名;
--  创建指定字符集的数据库  
 CREATE DATABASE student DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
--  显示数据库的创建信息   
SHOW CREATE DATABASE student;
--  修改数据库的编码  
default-character-set = utf8;
--  删除一个数据库   
drop database student;
-- **表级别**
--  修改表名
RENAME TABLE student TO stu;
--  修改字段的数据类型
alter table stu alter column id varchar not null
--  修改字段名
ALTER  TABLE stu CHANGE id stu_id varchar;
--  添加字段
alter table stu add phone varchar;
--  删除字段
alter table stu  drop phone;
--  修改表的存储引擎
ALTER TABLE stu ENGINE=InnoDB;
--  删除表的外键约束
alter table stu  drop foreign key 外键名;
--  删除一张表
drop table stu；
