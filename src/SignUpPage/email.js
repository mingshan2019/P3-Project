var nodemailer = require('nodemailer');
var config = {
        host: 'smtp.qq.com', 
        port: 465,
        auth: {
            user: '1073275508@qq.com',
            pass: 'dnwxentwxpllbffd'
        }
    };
var transporter = nodemailer.createTransport(config);
module.exports = function (mail){
    transporter.sendMail(mail, function(error, info){
        if(error) {
            return console.log(error);
        }
        console.log('mail sent:', info.response);
    });
};