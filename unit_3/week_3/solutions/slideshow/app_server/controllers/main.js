var slides = require("../models/slides.js");

module.exports.index = function(req, res){
  res.render('index');
};

module.exports.display = function(req, res){
    var action = req.params.action;

    var counter = (req.params.count ? Number(req.params.count): 1);

    res.render('slideshow', {next:(counter+1), prev:(counter-1), slide:slides[counter-1]});
};
