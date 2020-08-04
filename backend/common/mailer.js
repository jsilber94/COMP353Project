const nodemailer = require('nodemailer');

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

module.exports = {
  mail,
};
