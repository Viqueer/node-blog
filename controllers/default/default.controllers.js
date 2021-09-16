module.exports = {
  index: async (req, res) => {
    let pageTitle = "Home";
    let userName = "Victor";
    res.render("default/index", { pageTitle, userName });
  },
  about: async(req,res) =>{
    let bannerTitle = "About Us";
    let bannerContent = "More about Us!";
    res.render("default/about",{bannerTitle, bannerContent});
  },
  contact: async(req,res) =>{
    let bannerTitle = "Contact Us";
    let bannerContent = "Let's stay in touch!";
    res.render("default/contact",{bannerTitle, bannerContent});
  },
};
