import React from 'react'
import CodeBlock from '../components/CodeBlock'

function SendEmail() {
  return (
    <div>

https://react.email/
Step 1: Installing & Configuring React Email
npm install react-email @react-email/components

"email": "email dev --dir src/emails"


<CodeBlock> npm install resend</CodeBlock>
<CodeBlock>{`const express = require('express');
const { Resend } = require("resend");
const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/send-email', async (req, res) => {
  let { email, message } = req.body;
  console.log(req.body);

  const { data, error } = await resend.emails.send({
    from: "Penduko Beats <noreply@christophervillarin.com>",
    cc: ["royongpauco@gmail.com"],
    bcc: [""],
    to: [\`\${email}\`],
    subject: 'Inquiry About Purchasing Beats',
    text: message,
  });

  if (error) {
    return res.status(400).json({ error });
  } else {
    console.log("success");
    res.status(200).json({ data });
  }
});

module.exports = router;
`}</CodeBlock>

Create and Get the API keys in 
<CodeBlock>https://resend.com/api-keys</CodeBlock>

at initial setup, you wont be able to send to other email address except your email that was registered in resend, in order for you to send to other email or add them in cc, you need to setup the domain 
now go to
<CodeBlock>https://resend.com/domains</CodeBlock>
Add your domain
and then you will see the DNS records that you will need to add in your domain(e.g: godaddy, netlify, vercel)
you will need to add the MX, TXT, TXT, you can follow this:
https://www.youtube.com/watch?v=7HNJLUMV_TY
after adding them, hit verify domain.
wait few minutes or hours, and it should be status 'verified'
afte that you can now add in email or cc other people. 
    </div>
  )
}

export default SendEmail