const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'linkhubtree@gmail.com', 
        pass: 'fkrsztmpopufbdld', 
    }
});

send();

async function send() {
    const result = await transporter.sendMail({
        from: 'linkhubtree@gmail.com', // sender address
        to: "katherine.linw@gmail.com", // list of receivers
        subject: "Linkhub Forget Password ✔", // Subject line
        text: "Click to reset pw", // plain text body
        html: "<b>Reset PW</b>", // html body
    });

    console.log(JSON.stringify(result, null, 4));
}