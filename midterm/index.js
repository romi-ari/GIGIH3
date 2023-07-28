const express = require('express')
const app = express()

const connectDB = require('./config/database')
const router = require('./config/routes')
const port = 8000

app.use(express.json())

app.use(router)

connectDB()

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})