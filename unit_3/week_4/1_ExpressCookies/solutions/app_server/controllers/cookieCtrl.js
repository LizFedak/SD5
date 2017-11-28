module.exports.index = function(req,res){
	res.send("hello world");
};

module.exports.setCookie = function(req,res){
	var body = req.body;
	var list = [];
	if (req.signedCookies.list) {
		var found = false;
		list = req.signedCookies.list;

		list.forEach(function(val,index,array){
			if(body.id == val.id){
				found = true;
				val.quantity += body.quantity;
			}
		});
		
		if (!found) {
			list.push(body);
		}
		res.cookie('list', list, {signed : true});
		res.send(list);
	} else {
		list.push(body);
		res.cookie('list', list, {signed:true});
		res.send(list);
	}
};

module.exports.clear = function(req,res){
	res.clearCookie('list');
	res.send('Cleared');
};

module.exports.show = function(req,res){
	if (req.signedCookies.list) {
		var found = false;
		var cookies = req.signedCookies.list; // [{id:1},{id:2},{id:3}]
		cookies.forEach(function(val,index,array){ // val = {id:1}
			if (val.id == req.params.id) {
				found = true;
				res.send(val);
			}
		});
		if (!found) {
			res.send('ID not found');
		}
	} else {
		res.send('no cookie');
	}
};

module.exports.login = function(req,res){
	req.session.user = 'ADMIN';
	// res.send(req.session.user);
	res.send(req.session.user);
};

module.exports.test = function(req,res){
	res.send("TEST: " + req.session.user);
};