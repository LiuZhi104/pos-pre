-- 插入记录  
INSERT INTO student（id，name，age,sex）
        VALUES(001，张三，18,男)，(002，李四，20,女);
-- 修改记录  
update student set name='王三' where id=001;
--  删除记录
delete from student where id=002;
-- 查询记录
select from student;