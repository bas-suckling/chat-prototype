const path = require('path')

const express = require('express')

// const users = require('./routes/users')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../../public')))

// server.use('/api/v1/users', users)
server.use('/', authRoutes)


server.get('/', (req, res) => {
    res.sendFile('/index.html')
})

module.exports = server
