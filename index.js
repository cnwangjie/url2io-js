var request = require('request');

var url2io = function(token) {
    this.token = token;
    this.article = function(url, fields, callback) {
        request({
            method: 'GET',
            uri: 'http://api.url2io.com/article',
            qs: {
                token: token,
                url: url,
                fields: fields.join(',')
            }
        },
        function(error, res, body) {
            callback(JSON.parse(body));
        });
    }
}

module.exports = url2io;
