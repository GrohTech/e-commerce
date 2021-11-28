# E-Commerce Backend

## Description 

This app will give e-commerce companies the backend capabilities to create, organize, update, and delete product data.

  
## Table of Contents 
* [Installation](#installation)
* [Instructions](#instructions)
* [Languages & Tools](#languages-tools)
* [Credits](#credits)
* [Questions](#questions)
  
## Installation

Users will need Node.js, Express, Dotenv, Sequelize, MySQL2, MySQL Workbench, and a RESTful API client (Ex. Insomnia, Postman).
  
## Instructions 

Clone repository:
```
git clone <repository link>
```

Add npm dependencies:
```
npm install
```
Sign into MySQL:
```
mysql -u root -p
```
Import database:
```
source db/schema.sql
```
Exit MySQL:
```
quit
```
Seed database:
```
npm run seed
```
Create tables and start server:
```
npm start
```

1. Go to RESTful API client
2. Test GET, POST, PUT, DELETE routes
3. Verify database has been updated in MySQL workbench


[App Demo Video](https://watch.screencastify.com/v/oSOLOP3PlxR8FtrwP5UU)

## Languages & Tools

* JavaScript
* Node.js
* Dotenv
* Express
* Sequelize
* MySQL2
* MySQL Workbench
* Insomnia

## Credits

1. Lauren Groh 
2. Front-end starter code from UW Extended Campus Trilogy Bootcamp - with additional help from Trilogy tutor Ismael Lopez, Trilogy materials, and the below resources.
 * [Syntax TV](https://youtu.be/43o-xXcKr_M)
 * [Stack Overflow](https://stackoverflow.com/questions/29233896/sequelize-table-without-column-id)
 * [Grepper](https://www.codegrepper.com/code-examples/javascript/numeric+validation+in+sequelize+in+node+js)
 * [Sequelize API Reference](https://sequelize.org/v5/manual/data-types.html)
 * [Sequelize API Reference](https://sequelize.org/master/manual/model-basics.html#default-values)
 * [Sequelize API Reference](https://sequelize.org/master/class/lib/associations/base.js~Association.html)
 * [Steve Griffith - Prof3ssorSt3v3](https://youtu.be/5WFyhsnU4Ik)
 * [productioncoder](https://youtu.be/5WFyhsnU4Ik)

## Questions

If you have any questions please connect with me through [GitHub](https://github.com/GrohTech) or [legroh@uwm.edu](mailto:legroh@uwm.edu).