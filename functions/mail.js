const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: "smtp.ionos.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
})

exports.handler = async function(req ) {

    const {email,password} = JSON.parse(req.body)
    try {
        
            const options = {
            from: '"Pass Safe" <bot@thedevguy.in>', // sender address
            to: email, // list of receivers
            subject: "You have Successfully Generated your Password", 
            text: `Thank You For Using Pass Safe. Here is your Random Generated Password: ${password} . Keep it Safe`, 
            html: `
            <img alt="banner" src="cid:unique@example.com" />
            <h1>Congratulations, You have Successfully Generated your Password</h1>
            <h2>Thank You For Using PASS SAFE</h2>
            <h3>Here is your Random Generated Password : <strong><kbd> ${password} </kbd></strong> <h3>
            <p><b> KEEP IT SAFE! </b></p>    
            `,
            attachments: [{
              filename: 'mail-image.png',
              path: 'public/mail-image.png',
              cid: 'unique@example.com' //same cid value as in the html img src
          }]
          }
        
            let info = await transporter.sendMail(options);
            console.log("Message sent: %s", info.messageId);

            if (info.accepted) {
                return {
                    statusCode : 200,
                    body : JSON.stringify({
                        status: 'success',
                        message: 'Email Sent'

                    })
                }
            } else if (info.rejected ) {
                return {
                    statusCode : 400,
                    body : JSON.stringify({
                        status: 'failed',
                        message: 'Wrong Email Address'
                    })
                }
            }
    } catch(error) {
    console.error(error)
    }
}