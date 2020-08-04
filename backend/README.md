# COMP 353 Web Career Portal



<h3>TO RUN</h3>
npm install
<br />
nodemon app.js

<h3>Credential Locations </h3>
COMP353Project\config\database.js
<br />
COMP353Project\common\mailer.js


<h3>File locations </h3>

SQL statements: app/models
<br />
Entity specific routes: app/routes
<br />
Entity services: app/services

<h3>Endpoints </h3>

`GET /user` 

`POST /user Payload:` fname,lname,category,email,password_hash,balance,date_last_payment,withdrawal_status

`GET /user/userId`

`DELETE /user/userId`

`PUT /user/userId  Payload:` fname,lname,category,email,balance,date_last_payment,withdrawal_status

`PATCH /user/application/applicationId Payload: ` applicationId, responseToApplication(reviewing, accepted, rejected, submitted)

`PATCH /user/payment/userId Payload: ` user_id, balance 