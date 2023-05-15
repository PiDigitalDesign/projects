const functions = require('firebase-functions/v2/https')
const nodemailer = require('nodemailer');
exports.sendMailOverHTTP = functions
    .onRequest(
        {
            // Domains we allow this function to be called from
            cors: [
                "southportcarpetcentre.co.uk", // untested
                "southport-carpet-center.web.app",
                "southport-carpet-center.firebaseapp.com",
                /southport-carpet-center--alpha-([0-9a-zA-Z]*)\.web\.app$/,
            ],
            secrets: ["HOSTPRESTO_SMTP_AUTH"]
        },
        (req, res) => {
            const mailOptions = {
                from: 'support@pidigitaldesign.co.uk',
                to: req.body.to,
                subject: req.body.subject,
                html: `<h2>Contact Form Message</h2>
                <p>
                   <b>Email: </b>${req.body.email}<br>
                   <b>Mobile: </b>${req.body.mobile}<br>
                   <b>Name: </b>${req.body.name}<br>
                   <b>Message: </b>${req.body.message}<br>
                </p>`
            };
            const transporter = nodemailer.createTransport({
                host: 'mailserver.hostpresto.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'support@pidigitaldesign.co.uk',
                    pass: process.env.HOSTPRESTO_SMTP_AUTH
                }
            });
            return transporter
                .sendMail(mailOptions)
                .then((info) => {
                    res.send(`Sent! ${JSON.stringify(info)}`);
                })
                .catch((err) => {
                    res.send('Failed! ' + err.toString());
                });
        });