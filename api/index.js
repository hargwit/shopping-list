var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

var server = app.listen(3001, () => {
    console.log(`Server running at port ${server.address().port}`)
})