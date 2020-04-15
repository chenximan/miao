function setRouter(app){ 
 var router = app; 

app.get('/getMore', function (req, res) {
    var len = 3;
    var start = 3;
    var data = [];
    for (var i = 0; i < len; i++) {
        data.push(start++);
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
});}
 module.exports.setRouter = setRouter