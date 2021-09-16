const router = require("express").Router();

//ES6 destructuring
const {
  index,
  about,
  contact
} = require("../../controllers/default/default.controllers");

router.get("/", index);
router.get("/about", about);
router.get("/contact", contact);


module.exports = router;
