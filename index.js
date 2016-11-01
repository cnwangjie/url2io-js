var request = require('request');

var url2io = function(token, url = null, callback = null, fields = []) {
    this.token = token;
    this.handle = function(url, callback, fields = []) {
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
    if (url!=null && callback!=null) {
        this.handle(url, callback, fields);
    }
}

module.exports = url2io;
