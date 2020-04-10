const nodemailer = require('nodemailer');

exports.postApply = (req, res, next) =>{
    const data = req.body;
    console.log(data);

    const smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: '465',
        secure: 'true',
        auth: {
            user: 'lucigtech@gmail.com',
            pass: 'dwtrcm73'
        }
    });

    const mailOptions = {
        from: data.email,
        to: 'lucigtech@gmail.com',
        subject: 'Apply for a Software Engineer',
        html: `
                    <p>Name: ${data.name}</p>
                    <p>Email: ${data.email}</p>
                    <p>Phone Number: ${data.phone}</p>
                    <p>Company Name: ${data.github}</p>
                    <p>Country: ${data.website}</p>
                    <p>Project Name: ${data.country}</p>
                `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if(error){
            res.send(error)
        }else{
            res.send('Success');
            console.log(response)
        }
        smtpTransport.close();
    })
}

exports.getApply = (req, res, next) =>{
    res.send('Coming from the Application Hub!!!');
}