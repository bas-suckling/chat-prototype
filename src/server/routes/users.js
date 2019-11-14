const express = require('express')
const router = express.Router()

const db = require('../db/databaseFunctions')

//need routers for creating users, reading list of users, updating passwords, deleting users

router.get('/', (req, res) => {
  db.getUser(req.body)
  .then(res.json)
  res.send()
})



router.post('/', (req, res) => {
    db.addNewUser(req.body)
    .then(res.json)
    res.send('User added successfully')  
  })

module.exports = router