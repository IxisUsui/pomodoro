drop table if exists task;
create table task
(
    id          int primary key auto_increment,
    description varchar(100) not null,
    done        bit
);