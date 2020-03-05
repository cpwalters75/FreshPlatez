
const express = require("express");
const router = express.Router();
const Mailgun = require("mailgun-js");

const db = require("../models");
const api_key = process.env.API_KEY;
const domain = process.env.DOMAIN;
const from_who = process.env.EMAIL_USER;

const mailgun = new Mailgun({ apiKey: api_key, domain: domain });
// ----------------------MailGun Routes-----------------------------------------------------

router.get("/platez", function (req, res) {
  db.meals.findAll({}).then(function (mealData) {
    res.json(mealData);
  })
})
// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
router.post("/email", function (req, res) {

  console.log("sent?", req.body)
  console.log(mailgun)

  // need to render a thank you and summary page to user

  let data = {
    from: from_who,
    to: req.body.email,
    subject: 'FreshPlatez order',
    html:
      `Thank you for your order ${req.body.Fname} ${req.body.Lname}!  You gots the below goooooood stuff coming at ya in 3-10 days
      
      Notes to the chef: ${req.body.notes}`

  };

  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function (err, body) {
    //If there is an error, render the error page
    if (err) {

      console.log("got an error: ", err);
    }
    //Else we can greet    and leave
    else {
      console.log(data)
      console.log("body", body);
    }
  });


});



module.exports = router;
