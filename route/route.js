var dotenv = require('dotenv')
dotenv.config()
const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: process.env.EMAILADD,
      pass: process.env.EMAILPWD,
    },
  });
  let mailOptions = {
    from: data.email,
    to: process.env.TOEMAILADD,
    subject: `* Message from ${data.name} *`,
    html: `

            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please Fill All The Fields!" });
      res.status(200).json({ msg: "Thank You For Contacting Aaron." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "Sorry, there was a server error. Please try again soon!" });
    }
  });
  res.status(200)
});
module.exports = router;