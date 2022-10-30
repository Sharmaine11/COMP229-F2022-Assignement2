let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

//connect to our Book Model
//let Contact = require("../models/contact");

let contactController = require("../controllers/contact");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the Book List page - READ Operation */
router.get("/", contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", requireAuth, contactController.addpage);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", requireAuth, contactController.addprocesspage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/update/:id", requireAuth, contactController.displayupdatepage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/update/:id", requireAuth, contactController.processingupdatepage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", requireAuth, contactController.deletepage);

module.exports = router;
