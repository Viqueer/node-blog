const router = require("express").Router();
const { singlePost, createPost } = require("../../controllers/posts/posts.controllers");

router.get("/:id", singlePost);

router.route("/create")
.get()
.post(createPost);

module.exports = router;
