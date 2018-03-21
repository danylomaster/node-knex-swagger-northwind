# node-knex-swagger-northwind

### install knex globaly

> npm install knex -g

## To start server:

> npm run start

---

### Update the database matching your NODE_ENV by running:

> knex migrate:latest

###### To rollback the last batch of migrations:

> ###### knex migrate:rollback

### To run seed files, execute:

> knex seed:run

---

## Files for database (in /db/sql)

* Model:
  * northwind.mwb (MySQL Workbench v6.2)
* EER Diagram:
  * northwind-erd.pdf
  * northwind-erd.png
* Structure:
  * northwind.sql
  * northwind-default-current-timestamp.sql (uses DEFAULT CURRENT TIMESTAMP, requires MySQL 5.6.5+)
* Data:
  * northwind-data.sql
