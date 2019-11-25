const path = require('path')

// const cors = require ('cors')
const express = require('express')

// const users = require('./routes/users')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
// server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../../public')))

// server.use('/api/v1/users', users)
server.use('/api/v1', authRoutes)


server.get('/', (req, res) => {
    res.sendFile('/index.html')
})

module.exports = server
