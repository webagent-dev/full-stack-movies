require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const host = `server start at http:localhost:${port}`
const connectToDb = require('./service/connect')
const cors = require('cors')
const authRouter = require('./router/auth.route')
const userRouter = require('./router/user.route')
const movieRouter = require('./router/movie.route')

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// routes
app.use('/api/v1/', authRouter)
app.use('/api/v1/get/', userRouter)
app.use('/api/v1/', movieRouter)
const start = async () => {
    try {
        await connectToDb('mongodb://localhost/movie-api-test')
        app.listen(port, () => console.log(host))
    } catch (err) {
        console.log(err)
    }
}

start()