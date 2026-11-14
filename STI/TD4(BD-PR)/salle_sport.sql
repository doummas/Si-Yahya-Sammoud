

CREATE TABLE COACH (
  idCoach       INT PRIMARY KEY,
  nom           VARCHAR(40) NOT NULL,
  specialite    VARCHAR(30),
  salaire       DECIMAL(8,2),
  dateEmbauche  DATE
);

INSERT INTO COACH VALUES
(1, 'Ben Salah', 'Musculation', 1800.00, '2020-09-01'),
(2, 'Trabelsi',  'Yoga',        1500.50, '2021-03-15'),
(3, 'Gharbi',    'Cardio',      1650.75, '2022-01-10'),
(4, 'Jlassi',    'Boxe',        2100.00, '2019-06-20');

alter table coach add COLUMN email VARCHAR(100);
select * from coach;

