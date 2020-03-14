const express = require("express");
const router = express.Router();
const Mailgun = require("mailgun-js");
const multer = require("multer");
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
  });
});

// ------------------Calc Order Totals------------------------------------------------------------

router.post("/total", function (req, res) {
  const ids = req.body.map(item => {
    return item.MealId;
  });
  console.log(ids);
  db.Meal.findAll({
    where: {
      id: ids
    }
  }).then(mealData => {
    const total = req.body.reduce((total, cartItem) => {
      const item = mealData.find(x => x.id === cartItem.MealId);
      let itemPrice = item.price_small;
      if (cartItem.meal_size === "Large") {
        itemPrice = item.price_large;
      }
      return total + itemPrice * cartItem.quantity;
    }, 0);
    let trimTotal = total.toFixed(2)

    // let itemTotal = itemPrice * cartItem.quantity;
    // orderTotal += itemTotal;
    res.json({ trimTotal });
  });

  // res.json("hello");
});

// ----------------------MailGun Routes-----------------------------------------------------

// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
router.post("/email", function (req, res) {
  console.log("sent?", req.body);
  console.log(mailgun);

  // need to render a thank you and summary page to user

  let data = {
    from: from_who,
    to: req.body.email,
    subject: "FreshPlatez order",
    html: `Thank you for your order ${req.body.Fname} ${req.body.Lname}!  You gots the below goooooood stuff coming at ya in 3-10 days
      
      Notes to the chef: ${req.body.notes}
      Cart ${req.body.cartItems}
      
      Your total is ${req.body.orderTotal}`
  };

  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function (err, body) {
    console.log(data)
    //If there is an error, render the error page
    if (err) {
      console.log("got an error: ", err);
    }
    //Else we can greet    and leave
    else {
      console.log(data);
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
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const MAX_SIZE = 2000000;
const upload = multer({
  storage: storage,
  fileFilter,
  limits: {
    filesize: MAX_SIZE
  }
});

router.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file);
  res.json({ file: req.file });

  // try {
  //   await sharp(req.file.path)
  //     .resize(344)
  //     .background('white')
  //     .embed()
  //     .toFile(`./client/dist/img/${req.file.originalname}`)

  //   fs.unlink(req.file.path, () => {
  //     res.json({ file: `./images/${req.file.originalname}` })
  //   })
  // } catch (err) {
  //   res.status(422).json({ err });
  // }
});

router.put("/update", function (req, res) {
  console.log("body", req.body);

  db.Meal.update(
    {
      short_Description: req.body.name,
      ingredients: req.body.ingredients,
      price_small: req.body.smallPrice,
      price_large: req.body.largePrice,
      calories_small: req.body.smallCal,
      calories_large: req.body.largeCal,
      image_name: req.body.image,
      is_active: req.body.mealShow
    },
    { where: { id: req.body.id } }
  ).then(result => {
    console.log(result);
  });
});

router.post("/create", function (req, res) {
  db.Meal.create({
    short_Description: req.body.name,
    ingredients: req.body.ingredients,
    price_small: req.body.smallPrice,
    price_large: req.body.largePrice,
    calories_small: req.body.smallCal,
    calories_large: req.body.largeCal,
    image_name: req.body.image,
    lead_time: 2,
    reheat_time: 30,
    is_active: 1
  });
  console.log(result);
});

router.post("/delete", function (req, res) {
  console.log(req.body)
  db.Meal.destroy({
    where: { id: req.body.id }
  })
    .then(
      function (rowDeleted) {
        // rowDeleted will return number of rows deleted
        if (rowDeleted === 1) {
          console.log("Deleted successfully");
        }
      },
      function (err) {
        console.log(err);
      }
    )
});

(module.exports = router), fileFilter;
