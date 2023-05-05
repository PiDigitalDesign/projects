const functions = require('firebase-functions')
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');
admin.initializeApp()
const runOptions = {
    secrets: ["HOSTPRESTO_SMTP_AUTH"]
}
exports.sendMailOverHTTP = functions
    .runWith(runOptions)
    .https
    .onRequest((req, res) => {
        const mailOptions = {
            from: req.body.email,
            to: req.body.to,
            subject: req.body.subject,
            html: `<h1>Contact Form Message</h1>
                <p>
                   <b>Email: </b>${req.body.email}<br>
                   <b>Name: </b>${req.body.name}<br>
                   <b>Mobile: </b>${req.body.mobile}<br>
                   <b>Message: </b>${req.body.message}<br>
                </p>`
        };
        var transporter = nodemailer.createTransport({
            host: 'mailserver.hostpresto.com',
            port: 465,
            secure: true,
            auth: {
                user: 'support@pidigitaldesign.co.uk',
                pass: process.env.HOSTPRESTO_SMTP_AUTH
            }
        });
        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                return res.send('Failed! ' + error.toString());
            }
            var data = JSON.stringify(data)
            return res.send(`Sent! ${data}`);
        });
    });