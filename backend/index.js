require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const host = 'server start at http:localhost:`${port}`'
const connectToDb = require('./service/connect')
const cors = require('cors')

// middleware
// routes
app.get('/', (req, res) => {
    res.status(200).json('server start')
})
const start = async () => {
    try {
        await connectToDb(process.env.MONGO__URL)
    } catch (err) {
        console.log(err)
    }
}

start()