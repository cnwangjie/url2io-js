var request = require('request');

function url2io(token) {
    if (!(this instanceof url2io)) {
        return new url2io(token)
    }

    if (token) {
        this.uri = 'http://api.url2io.com/article';
        this.token = token;
    } else {
        this.uri = 'http://api.url2io.com/demo/article';
        this.token = 'demo';
    }

    this.article = function(url, fields, callback) {
        request({
            method: 'GET',
            uri: this.uri,
            qs: {
                token: this.token,
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
