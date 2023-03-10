const nodeMailer = require('nodemailer');

const html = `
     Hello World
`;

async function main() {
  nodeMailer.createTransport({
    host: 'mail.openjavascript.info',
    port: 465,
    secure: true,
    auth: {
      user: 'test@OPENJAVASCRIPT.INFO',
      pass: 'NodeMailer123!',
    },
  });

  const info = await transporter.sendMail({
    from: 'OpenJavaScript <test@openjavascript.info>',
    to: 'test2@openjavascript.info',
    subject: 'Testing, testing, 123',
    html: html,
  });

  console.log(`Message sent: ${info.messageId}`);
}

