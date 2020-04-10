const nodemailer = require('nodemailer');


exports.postHire = (req, res, next) =>{
        const data = req.body;
        console.log(data);
    
        const smtpTransport = nodemailer.createTransport({
            service: 'smtp.googlemail.com',
            port: '465',
            secure: 'true',
            auth: {
                user: 'lucignation@gmail.com',
                pass: 'dwtrcm73'
            }
        });
    
        const mailOptions = {
            from: data.email,
            to: 'lucignation@gmail.com',
            subject: 'I will like to Hire a Developer/Designer',
            html: `
                        <p>Name: ${data.name}</p>
                        <p>Email: ${data.email}</p>
                        <p>Phone Number: ${data.phone}</p>
                        <p>Company Name: ${data.company}</p>
                        <p>Country: ${data.country}</p>
                        <p>Project Name: ${data.duration}</p>
                        <p>Project Description: ${data.desc}</p>
                    `
        };

        console.log(mailOptions);
    
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

exports.getHire = (req, res, next) => {
        res.send('Welcome to my messages cPanel');
}