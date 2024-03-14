const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <h1>ahihi</h1>
    </body>
    
    </html>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})