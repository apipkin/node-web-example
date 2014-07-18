var Hapi = require('hapi'),
    server = Hapi.createServer('0.0.0.0', +process.env.PORT || 3000);

super!

server.route({
    method: 'GET',
    path: '/',
    handler: function (req, res) {
        res('Hello, world!');
    }
});

server.start();