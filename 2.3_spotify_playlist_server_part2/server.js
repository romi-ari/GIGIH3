const bodyParser = require("body-parser")
const router = require('./routes/spotifyRoutes')
const express = require("express")
const app = express()
const port = 8080

app.use(bodyParser.json())

app.use(router)

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

