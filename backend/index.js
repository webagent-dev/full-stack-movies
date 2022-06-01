require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const host = `server start at http:localhost:${port}`
const connectToDb = require('./service/connect')
const cors = require('cors')
const authRouter = require('./router/auth.route')

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// routes

app.use('/api/v1/', authRouter)
const start = async () => {
    try {
        await connectToDb(process.env.MONGO__URL)
        app.listen(port, () => console.log(host))
    } catch (err) {
        console.log(err)
    }
}

start()