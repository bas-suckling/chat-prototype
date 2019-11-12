const path = require('path')

const cors = require ('cors')
const express = require('exrpess')

const users = require('./routes/users')

const server = express()

server.use(express.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../../public')))

server.use('api/v1/users', users)

module.exports = server
