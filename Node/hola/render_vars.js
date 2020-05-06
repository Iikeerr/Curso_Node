var http = require("http"),
    fs = require("fs");

http.createServer(function(req,res){
    fs.readFile("./HTML/index.html",function(err,html){
        var html_string = html.toString();

        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre = "Mikel!!";

        for (var i = 0; i < variables.length; i++) {
            var value = eval(variables[i]);
            console.log(variables[i]);
            console.log(value);
            html_string = html_string.replace("{"+variables[i]+"}",value);
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);
        res.end();
    });
}).listen(8080);