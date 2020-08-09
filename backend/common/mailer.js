const nodemailer = require('nodemailer');

const userKeys = ['fname', 'lname', 'category', 'email', 'password_hash', 'balance', 'date_last_payment', 'withdrawal_status', 'isAdmin']
const jobKeys = ['title', 'description', 'category', 'date_posted', 'Employer_id_fk', 'numNeeded']
const applicationKeys = ['status', 'date_applied', 'user_id_fk', 'employer_id_fk', 'job_id_fk']

const fromEmail = 'comp353testemail@gmail.com';
const fromPassword = 'Create123!';

const smtpTransport = nodemailer.createTransport({
  service: 'Gmail', // sets automatically host, port and connection security settings
  auth: {
    user: fromEmail,
    pass: fromPassword,
  },
});

function mail(messageBody, to, subject) {
  const messageBodyJson = JSON.stringify(messageBody);
  smtpTransport.sendMail({ // email options
    from: fromEmail, // sender address.  Must be the same as authenticated user if using Gmail.
    to, // receiver
    subject, // subject
    text: messageBodyJson, // body
  }, (error, response) => { // callback
    if (error) {
      console.log('error', error);
    } else {
      console.log(response);
    }

    smtpTransport.close();
    console.log('SMTP connection released');
    // shut down the connection pool, no more messages.
    // Comment this line out to continue sending emails.
  });
}

function generateQuery(id, body, type){
  
}

module.exports = {
  mail,
};
