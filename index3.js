Mysql

SQL分类
1.DDL语句
  数据定于语句，通过这类语句可以对数据库进行创建删除更改（一般不使用）
2.DML语句
  数据操作语句，用于添加，删除，更新和查询数据库记录并检查数据完整性
3.DCL语句
   数据控制语句，通过此类语句可以对数据库的相关权限进行设置

Create database 查看数据列表
show datat 

登陆mysql
mysql -u 用户名 -p;
创建数据库
1.create database 数据库名;
2.选择数据库：use 数据库名；
3.查看所有数据库表：show tables；

删除数据库
drop database 数据库名；

创建表
Create table 表名 <子段名 子段类型 约束类型，子段名 子段类型 约束类型>；

查看表
desc 表名；

修改表子段类型
 A【after】B。A移动到B子段的后面
alter table 表名 modify column 子段名 子段类型 【first】；

增加表子段
 A【after】B。A移动到B子段的后面
alter table 表名 add column 子段名 子段类型 【first】；

删除表子段
 A【after】B。A移动到B子段的后面
alter table 表名 drop column 子段名 【first】；

子段改名
 A【after】B。A移动到B子段的后面
alter table 表名 change column 旧子段名 新子段名 子段类型 【first】；

更改表名
alter table 表名 rename 新表名；



DML语句

插入记录；
insert into 表名 （子段名，子段名）values （值，值），（值，值）


查询记录；
select * from 表名；
select distinct 子段名 from 表名；（只查询相同子段中一个子段）；
elsect distinct * from 表明 where 子段名=值；（设置约束条件，查询）

   排序
      select * from 表名 order by 子段名 【 asc由低到高 || desc由高到低 】
      多个子段排序
      select * from 表名 order by 子段名 asc 子段名；


  限制；
      【select * from 表名 order by 子段名 limit 1，1；】
      求和：sum求和；【select sun(子段名) from 表名;】
      记录总数：count（*）【select count(子段名 || *) from 表名；】
      最大值：max  【select max(*) from 表名；】
      最小值：min  【select min(*) from 表名；】
      GROUP BY（根据子段名2进行求和）：【select sum(子段名) from 表名 group by 子段名2】；
      WITH ROLLUP（分类以后继续sum求和）：【select sum(子段名) from 表名 group by 子段名2 with rollup】；
      HAVING (分类以后继续根据条件筛选)：【select sum(子段名) from 表名 group by 子段名2 having sum<子段名> >200】；


更新记录；
Update 表名 set 子段名=值，子段名=值；
Where可以添加越苏条件
Update 表名 set 子段名=值，子段名=值 where 约束条件；

更新多个表中数据
Update 表名，表名 set 表名.子段名=值，表名.子段名=值 where 表名.子段名=值 and 表明.子段名=值；


表连接：
  内连接：
  select * from 表名1，表名2 where 表名.id = 表名.id_s;
 起名（c）： select 表名1.id，表名2.id_s, c from 表名1，表名2 where 表名.id = 表名.id_s;
  外连接：
     左连接（查询左表中的所有记录，包括右边表中条件不符合的）
     elect  * from 表名1 left join 表名2 on 表名1.id = 表名2.id_s;
     右连接（查询右表中的所有记录，包括左边表中条件不符合的）
     elect  * from 表名1 right join 表名2 on 表名1.id = 表名2.id_s;

子查询：
    In : 在..里面
    select * from 表名 id  in （select distinct id from 表名2）；
    
    not in ：不在..里面

    Exists：后面的子语句是否查询出记录，如果查询出来true，否则是false，具体的值是null，也没有关系


记录联合
   select * from 表名 union select 子段名，子段名 from 表名2；
   select 子段名 from 表名 union add select 子段名 from 表名2；

数据类型
  tinyint【1】 smallint【2】 meniuminint【】 int bigint
zerofill（）

create table 表名
<id int , name int, primary key<id> >


浮点数
   单精度（float）大约7位小数
    非单精度（double）大约15位
定点数
    decimal(7,2)
日期数
    DATE dateimt timestamp time year
    now()当前时间
create table ti（time dateimt）
insert into ti values（now（））
字符串
char(5) 只能插入长度为5的字符串（不能放中文,不能） 
create table t3<name char(5) default charset-utf8>(可以设置中文)；

varchar() 最大可以放65,325英文字节
可以指定长度，节省空间（推荐使用）
   
     
