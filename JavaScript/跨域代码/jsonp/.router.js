function setRouter(app){ 
 var router = app; 

app.get('/getMore', function (req, res) {
	var len = 3;
	var start = 3;
	var more = [];
	for (var i = 0; i < len; i++) {
		more.push(start++);
	}
	var cb = req.query.callback;
	if (cb) {
		res.send(cb + '(' + JSON.stringify(more) + ')');
	} else {
		res.send(more);
	}
	res.send(data);
});}
 module.exports.setRouter = setRouter