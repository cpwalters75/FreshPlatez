const express = require("express");
const router = express.Router();
const Mailgun = require("mailgun-js");
const multer = require("multer")
const sharp = require("sharp");
const fs = require("fs");

const db = require("../models");
const api_key = process.env.API_KEY;
const domain = process.env.DOMAIN;
const from_who = process.env.EMAIL_USER;

const mailgun = new Mailgun({ apiKey: api_key, domain: domain });

// ------------------Meal Routes------------------------------------------------------------

router.get("/meals", function (req, res) {
  //res.json("hello from the server")
  db.Meal.findAll({}).then(mealData => {
    res.json(mealData);

  })
})

// ---------------------Orders and Order_details Post Transaction---------------------------------------
// router.post("/orders", function(req, res) {

//   console.log("Order Data:");
//   console.log(req.body);

//  order.create({
//     total: req.body.total,
//     notes: req.body.notes,
//     order_status: req.body.status,
//     delivery_date: req.body.delivery_date,
//     user_id: req.body.user_id
//   }).then(function(results) {
//     res.json(results);
//   });

//   order_details.create({
//     meal_size:  req.body.meal_size,
//     quanity: req.body.quanity,
//     price:  req.body.price,
//     meal_status:  req.body.meal_status,
//     OrderId: req.body.OrderId,
//     MealId:  req.body.MealId
//   })
// });


router.post("/orders", function(req, res) {
  console.log("Order Data:");
  console.log(req.body);

// First, we start a transaction and save it into a variable
const t = await sequelize.transaction();

try {

  // Then, we do some calls passing this transaction as an option:
  const user =   await users.create({
    user_email: req.body.email,
    Fname: req.body.Fname,
    Lname: req.body.Lname,
    notes: req.body.notes,
    order_status: req.body.status,
    delivery_date: req.body.delivery_date
  }, { transaction: t });
  console.log(user)

  //get the userid to pass to the order
  // select id from users where req.body.email = user_email

  //Insert the order
  const order =   await order.create({
    total: req.body.total,
    notes: req.body.notes,
    order_status: req.body.status,
    user_id: req.body.user_id
  }, { transaction: t });
  console.log(order)
// need to get order id to pass to  order_details


//Insert the order details
  const order_details = await order_details.create({
    meal_size:  req.body.meal_size,
    quanity: req.body.quanity,
    price:  req.body.price,
    meal_status:  req.body.meal_status,
    OrderId: req.body.OrderId,
    MealId:  req.body.MealId
  }, { transaction: t });
  console.log(order_details)
  // If the execution reaches this line, no errors were thrown.
  // We commit the transaction.
  await t.commit();
  console.log(results)
  res.json(results)
} catch (error) {

  // If the execution reaches this line, an error was thrown.
  // We rollback the transaction.
  await t.rollback();
  alert("There was a database issue, please try your order again");

}
// ----------------------------------------------------------------------------------------------------
// --------------------Insert Meal Card---------------------------------------------------------------




// ------------------Calc Order Totals------------------------------------------------------------

router.post("/total", function (req, res) {
  console.log(req.body)
  res.json("hello")
  // Sudo Loop through elements in req, 
  // find meal using MealID
  // us this if statment to determine which price to use 
  // this.orderTotal = 0;
  // this.getCartItems.forEach(cartItem => {
  //   if (cartItem.meal_size === "Small") {
  //     this.itemPrice = cartItem.price_small;
  //   } else if (cartItem.meal_size === "Large") {
  //     this.itemPrice = cartItem.price_large;
  //   }
  //   this.itemTotal = this.itemPrice * cartItem.quantity;
  //   this.orderTotal += this.itemTotal;
  // });
})


// ----------------------MailGun Routes-----------------------------------------------------

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

// --------------- update Meals routes----------------------------------------

const fileFilter = function (req, file, cb) {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Wrong file type");
    error.code = "LIMIT_FILE_TYPES";
    return cb(error, false);
  }

  cb(null, true);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/dist/img/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const MAX_SIZE = 2000000;
const upload = multer({ 
  storage: storage,
  fileFilter,
  limits: {
    filesize: MAX_SIZE
  }})

router.post("/upload", upload.single("file"), (req, res) => {
    console.log(req.file)
    res.json({ file: req.file})

  // try {
  //   await sharp(req.file.path)
  //     .resize(344)
  //     .background('white')
  //     .embed()
  //     .toFile(`../client/dist/img/${req.file.originalname}`)


  //   fs.unlink(req.file.path, () => {
  //     res.json({ file: `../src/assets/images/${req.file.originalname}` })
  //   })
  // } catch (err) {
  //   res.status(422).json({ err });
  // }
});

router.put("/update", function (req, res) {
  console.log('body', req.body)

  db.Meal.update({
    short_Description: req.body.name,
    ingredients: req.body.ingredients,
    price_small: req.body.smallPrice,
    price_large: req.body.largePrice,
    calories_small: req.body.smallCal,
    calories_large: req.body.largeCal,
    is_active: req.body.mealShow
  },
    { where: { id: req.body.id } })
    .then((result) => {
      console.log(result)
    })
})



module.exports = router, fileFilter;
