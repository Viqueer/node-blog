module.exports = {
  singlePost: async (req, res) => {
    let bannerTitle = "Post Details";
    let bannerContent = "Single blog posts";
    res.render("posts/singlePost", { bannerTitle, bannerContent });
  },
  createPost: async (req, res) => {
    const { postTitle, postTag, postImage, postBody } = req.body;
    console.log(`This is the post body ${req.body}`);
    console.log("File:::::::", req.file);

    const errors = [];

    //validating data
    if (!postTitle || !postTag || !postImage || !postBody) {
      console.log("Sorry, data not complete");
    } else if (postBody.length < 20) {
      errors.push({
        message: "Sorry, try again",
      });
      res.redirect("/posts/create");
    } else {
      console.log("Success", req.body);
      res.redirect("/");
    }
  },
  createGet: (req,res) => {
      res.render("posts/createPost")
  }
};
