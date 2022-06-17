const nodemailer = require('nodemailer')
const express = require('express')
const router =  express.Router()

const sendMail = async (req,res) => {

    try {

        let transporter = nodemailer.createTransport({
            host: "smtp.ionos.com",
            port: 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
              user: process.env.USER,
              pass: process.env.PASSWORD,
            },
        })
        
            const options = {
            from: '"Pass Safe" <bot@thedevguy.in>', // sender address
            to: req.body.email, // list of receivers
            subject: "You have Successfully Generated your Password", 
            text: `Thank You For Using Pass Safe. Here is your Random Generated Password: ${req.body.password} . Keep it Safe`, 
            html: `
            <img alt="banner" src="cid:unique@example.com" />
            <h1>Congratulations, You have Successfully Generated your Password</h1>
            <h2>Thank You For Using PASS SAFE</h2>
            <h3>Here is your Random Generated Password : <strong><kbd> ${req.body.password} </kbd></strong> <h3>
            <p><b> KEEP IT SAFE! </b></p>    
            `,
            attachments: [{
              filename: 'mail-image.png',
              path: './mail-image.png',
              cid: 'unique@example.com' //same cid value as in the html img src
          }]
          }
        
            let info = await transporter.sendMail(options);
            console.log("Message sent: %s", info.messageId);

            if (info.accepted) {

              res.status(200).send( {status: 'success',message: 'Email Sent'})
            } else if (info.rejected ) {

              res.status(400).send( {status: 'failed',message: 'Wrong Email Address'})
            }


    } catch(error) {
      res.status(500).send( {status: 'failed',message: 'Internal Server Error'})
        console.error(error)
    }

}


router.post('/',sendMail)

module.exports = router