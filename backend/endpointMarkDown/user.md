| Request Type | Endpoint     | Use         | Payload                                                                              |
|--------------|--------------|-------------|--------------------------------------------------------------------------------------|
| GET          | /user        | getAllUsers |                                                                                      |
| POST         | /user        | createUser  | fname,lname,category,email,password_hash,balance,date_last_payment,withdrawal_status |
| GET          | /user/userId | getUserById |                                                                                      |
| DELETE       | /user/userId | deleteUser  |                                                                                      |
| PUT          | /user/userId | updateUser  | fname,lname,category,email,balance,date_last_payment,  withdrawal_status             |
| PATCH        | /user/userId/application/applicationId             |  respondToApplication           | applicationId, responseToApplication(reviewing, accepted, rejected, submitted, withdrawed)                                                                                  |                             | GET          | /user/userId/application/applicationId             | withdrawApplication             |                                                                                      |
| PATCH        | /user/payment/userId       |  makeManualPayment     |    user_id, balance                                                                                   |
