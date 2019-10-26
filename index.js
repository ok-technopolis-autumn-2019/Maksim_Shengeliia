const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
    .use(express.static(path.join(__dirname, 'static')))
    .get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'static/views/index.html'))
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));