var http = require('http');
http.createServer(function(req ,res){
    res.write(200,{'Content -Type':'text/html'});
    res.write("Hello from Server");
    res.end();

}).listen(3000);