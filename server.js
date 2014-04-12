var express = require("express");
var app = express();

app.configure(function(){
	app.use(express.static(__dirname+"/public"));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});
app.get('/api/printers', function(req,res){
res.sendfile("public/public.json");
});

app.get("/", function(req,res){
res.sendfile("public/app.html");
});

app.listen(8080);
console.log("App listening on 8080");


