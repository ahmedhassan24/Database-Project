CREATE TABLE student
(
  studentId INT CONSTRAINT student_studentId_pk PRIMARY KEY,
  Fname     NVARCHAR(20) CONSTRAINT student_Fname_nn NOT NULL,
  Lname     NVARCHAR(20) CONSTRAINT student_Lname_nn NOT NULL,
  Gender    NCHAR(1) CONSTRAINT studend_Gender_ck CHECK((Gender='M') or (Gender='F')),
  Bdate     Date,
  Class     INT CONSTRAINT student_Class_ck CHECK(Class In (1,2,3,4,5)));
