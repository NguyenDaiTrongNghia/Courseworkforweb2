const http = require('http');
const server = http.createServer(function(req, res) {
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('This is HomePage.');
        res.end();
    }
    else if(req.url == '/student'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('This is Student Page.');
        res.end();
    }
    else if(req.url == '/admin'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('This is Admin Page.');
        res.end();
    }
    else if(req.url == '/data'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({ message: "HEllo World JSON" }));
        res.end();
    }
    else
        res.end('Invalid Request!');
});
server.listen(8000);
console.log('Node.js web serverr at port 8000 is running.. ');    