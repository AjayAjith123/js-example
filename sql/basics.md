1. Database: 
    Database is a collection of inter-related data which helps in efficient retrieval, insertion and deletion of data from database and organizes the data in the form of tables, views, schemas, reports etc. For Example, university database organizes the data about students, faculty, and admin staff etc. which helps in efficient retrieval, insertion and deletion of data from it.
2. Normalization :
   It  is the process of minimizing redundancy from a relation or set of relations. Redundancy in relation may cause insertion, deletion, and update anomalies. So, it helps to minimize the redundancy in relations. Normal forms are used to eliminate or reduce redundancy in database tables.
3. DDL
    DDL is short name of Data Definition Language, which deals with database schemas and descriptions, of how the data should reside in the database.

CREATE:
     to create a database and its objects like (table, index, views, store procedure, function, and triggers)
ALTER:
     alters the structure of the existing database
DROP:
     delete objects from the database
TRUNCATE:
     remove all records from a table, including all spaces allocated for the records are removed
COMMENT: 
    add comments to the data dictionary
RENAME: 
    rename an object


 DML :

    DML is short name of Data Manipulation Language which deals with data manipulation and includes most common SQL statements such SELECT, INSERT, UPDATE, DELETE, etc., and it is used to store, modify, retrieve, delete and update data in a database.

SELECT: 
    retrieve data from a database
INSERT:
     insert data into a table
UPDATE: 
    updates existing data within a table
DELETE:
     Delete all records from a database table
MERGE:
     UPSERT operation (insert or update)
CALL: 
    call a PL/SQL or Java subprogram
EXPLAIN PLAN: 
    interpretation of the data access path
LOCK TABLE: 
    concurrency Control


5. INNER JOIN: 
    The INNER JOIN keyword selects all rows from both the tables as long as the condition satisfies. This keyword will create the result-set by combining all rows from both the tables where the condition satisfies i.e value of the common field will be same.
Syntax:

    SELECT table1.column1,table1.column2,table2.column1,....
    FROM table1 
    INNER JOIN table2
    ON table1.matching_column = table2.matching_column;




LEFT JOIN: 
    This join returns all the rows of the table on the left side of the join and matching rows for the table on the right side of join. The rows for which there is no matching row on right side, the result-set will contain null. LEFT JOIN is also known as LEFT OUTER JOIN.
    
Syntax:

    SELECT table1.column1,table1.column2,table2.column1,....
    FROM table1 
    LEFT JOIN table2
    ON table1.matching_column = table2.matching_column;



RIGHT JOIN: 
    RIGHT JOIN is similar to LEFT JOIN. This join returns all the rows of the table on the right side of the join and matching rows for the table on the left side of join. The rows for which there is no matching row on left side, the result-set will contain null. RIGHT JOIN is also known as RIGHT OUTER JOIN.
Syntax:
    SELECT table1.column1,table1.column2,table2.column1,....
    FROM table1 
    RIGHT JOIN table2
    ON table1.matching_column = table2.matching_column;




FULL JOIN: 
    FULL JOIN creates the result-set by combining result of both LEFT JOIN and RIGHT JOIN. The result-set will contain all the rows from both the tables. The rows for which there is no matching, the result-set will contain NULL values.
Syntax:
    SELECT table1.column1,table1.column2,table2.column1,....
    FROM table1 
    FULL JOIN table2
    ON table1.matching_column = table2.matching_column;
6. ACID property :
    ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of database transactions intended to guarantee validity even in the event of errors, power failures, etc.