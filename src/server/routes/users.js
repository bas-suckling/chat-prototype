const express = require('express')
const router = express.Router()

const db = require('../db/databaseFunctions')

//need routers for creating users, reading list of users, updating passwords, deleting users

router.get('/', (req, res) => {
  res.send('HI')  
})

router.post('/', (req, res) => {
    db.addNewUser(req.body)
    .then(res.json)
   
    
    
    
    res.send('HI')  
  })

module.exports = router