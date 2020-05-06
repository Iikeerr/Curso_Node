var http = require("http"),
    fs = require("fs");

http.createServer(function(req,res){
    fs.readFile("./HTML/index.html",function(err,html){
        var i = 0;
        while(i<=10){
            res.write(i+"");
            i++;
        };
        res.end();
    });
}).listen(8080);