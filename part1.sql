-- psql 

CREATE DATABASE final;
\connect final;


CREATE TABLE apprentices (apprentice_id SERIAL PRIMARY KEY, cohort_id int REFERENCES cohorts(cohort_id), first_name VARCHAR, last_name VARCHAR);

CREATE TABLE cohorts (cohort_id SERIAL PRIMARY KEY, city VARCHAR, year INTEGER);

INSERT INTO cohorts (city, year) VALUES('San Francisco', 2019), ('London', 2009);

INSERT INTO apprentices (cohort_id,first_name, last_name) VALUES(1,'Dena','Burd'),(1,'Daaimah','Tibrey'), (1,'Liliana','Velazquez');
INSERT INTO apprentices (cohort_id, first_name, last_name) VALUES(2, 'Hermione', 'Granger'), (2, 'Ginny','Weasley'), (2, 'Nymphadora', 'Tonks');

INSERT INTO cohorts (apprentice_id, city, year) VALUES('San Francisco', 2019), ('London', 2009);



