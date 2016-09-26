var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 5000;

app.set("port", port);

app.get("/*", function(req,res){
    console.log("We have requested ", req.params[0]);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname,"./public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});
