var http = require("http");

var manejador = function(solicitud, respuesta){d
    console.log("Recibimos respuesta del servidor");
    respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);
