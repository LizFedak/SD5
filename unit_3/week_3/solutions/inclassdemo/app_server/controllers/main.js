module.exports.index = function(req, res){
  res.render('index', {name: 'Andrew'});
};

module.exports.about = function(req, res){
  res.render('about', {
                        companyName: 'Skill Distillery',
                        phoneNumber: '3031234567',
                        employees: ['Andrew', 'Kris', 'Cole']
                      });
};

module.exports.contact = function(req, res){
  res.render('contact');
};
