//We're using the express framework and the mailgun-js wrapper
const express = require("express");
const Mailgun = require("mailgun-js");
const dotenv = require('dotenv').config();
const routes = require('./routes');
const db = require('./models');

const app = express();

const PORT = process.env.PORT || 8080;




//Tell express to fetch files from the /js directory
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", routes);

// ----------------------MailGun Routes-----------------------------------------------------

//Your api key, from Mailgun’s Control Panel
const api_key = "MAILGUN-API-KEY";

//Your domain, from the Mailgun Control Panel
const domain = "YOUR-DOMAIN.com";

//Your sending email address
const from_who = "your@email.com";

//We're using the Jade templating language because it's fast and neat
app.set("view engine", "jade");

//Do something when you're landing on the first page
app.get("/", function(req, res) {
  //render the index.jade file - input forms for humans
  res.render("index", function(err, html) {
    if (err) {
      // log any error to the console for debug
      console.log(err);
    } else {
      //no error, so send the html to the browser
      res.send(html);
    }
  });
});

// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
app.get("/submit/:mail", function(req, res) {
  //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
  const mailgun = new Mailgun({ apiKey: api_key, domain: domain });

  const data = {
    //Specify email data
    from: from_who,
    //The email to contact
    to: req.params.mail,
    //Subject and text data
    subject: "Hello from Mailgun",
    html:
      'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' +
      req.params.mail +
      '">Click here to add your email address to a mailing list</a>'
  };

  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function(err, body) {
    //If there is an error, render the error page
    if (err) {
      res.render("error", { error: err });
      console.log("got an error: ", err);
    }
    //Else we can greet    and leave
    else {
      //Here "submitted.jade" is the view file for this landing page
      //We pass the constiable "email" from the url parameter in an object rendered by Jade
      res.render("submitted", { email: req.params.mail });
      console.log(body);
    }
  });
});


// app.get("/invoice/:mail", function(req, res) {
//   //Which file to send? I made an empty invoice.txt file in the root directory
//   //We required the path module here..to find the full path to attach the file!
//   const path = require("path");
//   const fp = path.join(__dirname, "invoice.txt");
//   //Settings
//   const mailgun = new Mailgun({ apiKey: api_key, domain: domain });

//   const data = {
//     from: from_who,
//     to: req.params.mail,
//     subject: "An invoice from your friendly hackers",
//     text:
//       "A fake invoice should be attached, it is just an empty text file after all",
//     attachment: fp
//   };

//   //Sending the email with attachment
//   mailgun.messages().send(data, function(error, body) {
//     if (error) {
//       res.render("error", { error: error });
//     } else {
//       res.send("Attachment is on its way");
//       console.log("attachment sent", fp);
//     }
//   });
// });

// -------------------------------------------Mailgun stuff above here-----------------------

// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT} and process is PID ${process.pid}`);
    });
  });
  