const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

exports.handler = async (req, res) => {
  const { email, password } = JSON.parse(req.body);

  try {
    const options = {
      from: '"Pass Safe" <thedevguy99@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "You have Successfully Generated your Password",
      text: `Thank You For Using Pass Safe. Here is your Random Generated Password: ${password} . Keep it Safe`,
      html: `
      <html>
      <head>
      <link rel="stylesheet" type="text/css" hs-webfonts="true" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,500;0,600;0,700;1,600&display=swap">
      <title>Email template</title>
      <meta property="og:title" content="Email template">
      
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <style type="text/css">
  
      #email {
          font-family : 'Roboto Mono', monospace;
          color : #7498fb;
          width: 50%; 
          margin: 0 auto; 
          padding:0;
          font-size:16px;
          border : 1px solid #333;
          word-break:break-word;
      }

      .banner {
        color : white;
        background: #050c1f;
      }
     
        a{ 
          text-decoration: underline;
          font-weight: 600;
          color: #050c1f;
        }
  
        a:hover {
          text-decoration: none;
          color: #7498fb;
        }
        
        h1 {
          font-size: 56px;
          text-align: center;
        }
        
          h2{
          font-size: 28px;
          text-align: center;
        }
        
        p {
          font-weight: 500;
        }
        
        td {
      vertical-align: top;
        }
  
        .main {
          padding: 30px 30px 30px 60px;
        }
        
      </style>
    </head>
      <body>
        
  <div id="email">
    
    <! Banner --> 
           <table role="presentation" width="100%" class="banner">
              <tr>
                <td align="center">
                  <img alt="Pass Safe Logo" src="https://pass-safe.netlify.app/logo.png" width="200" align="middle">         
                  <h1>Congratulations</h1>
                  <h2> You have Successfully Generated your Password</h2>       
                </td>
          </table>
    
      <! Main Section --> 
    
    <table role="presentation" border="0" cellpadding="0" cellspacing="10px" class="main">
       <tr>
         <td align="center">
         <h2>Thank You For Using PASS SAFE</h2>
          <p>Here is your Random Generated Password : <strong><kbd> ${password} </kbd></strong> <p>
          <p><b> KEEP IT SAFE! </b></p> 
          </td> 
        </tr>
      </table>
    
    
          <! Footer -->   
    <table role="presentation" bgcolor="#F5F8FA" width="100%" >
        <tr>
            <td class="main" align="center">
              <p style="color:#99ACC2"> Made with &hearts; by <a href="https://thedevguy.in"> TheDevGuy </a></p>  
            </td>
            </tr>
        </table> 
  
        </div>
      </body>
        </html>
      `,
      
    };
    const info = await transporter.sendMail(options);
    console.log("Message sent: %s " + info.messageId);

    if (info.accepted) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          status: "success",
          message: "Email Sent",
        }),
      };
    } else if (info.rejected) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          status: "failed",
          message: "Wrong Email Address",
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "failed",
        message: "Internal Server Error, Try again Later",
      }),
    };
  }
};
