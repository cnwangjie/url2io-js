let url2io = require('./index.js')()
url2io.article('https://gloria.pub/tasks/', [], (json) => {
    console.log(json)
})
