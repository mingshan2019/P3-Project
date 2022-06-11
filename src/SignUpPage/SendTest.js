var send = require('./email');

var mail = {
    from: 'LinkHub <1073275508@qq.com>',
    subject: 'Test',
    to: 'aquariusjinxin@qq.com',
    text: 'Click to verify'
};
send(mail);