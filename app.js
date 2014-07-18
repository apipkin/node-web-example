var Hapi = require('hapi'),
    server = Hapi.createServer('0.0.0.0', +process.env.PORT || 3000);

server.route({
    method: 'GET',
    path: '/{name?}',
    handler: function (req, res) {
        res('Hello, ' + (req.params.name || 'world') + '!');
    }
});

if (!module.parent) {
    server.start(function () {
        console.log('Server started', server.info.uri);
    });
}

module.exports = server;
