
const express = require("express");
const router = express.Router();
const Mailgun = require("mailgun-js");

// const db = require("../models");
const api_key = process.env.API_KEY;
const domain = process.env.DOMAIN;
const from_who = process.env.EMAIL_USER;

const mailgun = new Mailgun({ apiKey: api_key, domain: domain });
// ----------------------MailGun Routes-----------------------------------------------------

router.get("/platez", function (req, res) {
  res.json("you got it")
})
// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
router.post("/email", function (req, res) {

  console.log(req.body)
  // need to render a thank you and summary page to user

  let data = {
    from: from_who,
    //The email to contact
    to: req.body.email,
    //Subject and text data
    subject: 'FreshPlatez order',
    html:
      `Thank you for your order ${req.body.firstName} ${req.body.lastName}!  You gots the below goooooood stuff coming at ya in 3-10 days`
  };

  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function (err, body) {
    //If there is an error, render the error page
    if (err) {
      res.render("error");
      console.log("got an error: ", err);
    }
    //Else we can greet    and leave
    else {
      //Here "submitted.jade" is the view file for this landing page
      //We pass the constiable "email" from the url parameter in an object rendered by Jade
      res.render("submitted");
      console.log(body);
    }
  });


});



module.exports = router;
