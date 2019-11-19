const express = require('express')
const router = express.Router()

const db = require('../db/databaseFunctions')

//need routers for creating users, reading list of users, updating passwords, deleting users

// router.get('/', (req, res) => {
//   db.getUser(req.body)
//   .then(res.json)
//   res.send()
// })

router.post('/', (req, res) => {
  let usernameFlag = true
  db.checkUsername(req.body)
    .then(user => {
      if (user == undefined) {
        db.addNewUser(req.body)
          .then(
            user => {
              console.log(user.username + 'is not taken')
              res.send(usernameFlag)
            }
          )
      } else {
        usernameFlag = false
        res.send(usernameFlag)
      }
    })
})


router.post('/login', (req, res) => {
  let loginFlag = false
  db.checkLogin(req.body)
    .then(user => {
      if (user != undefined) {
        loginFlag = true
        res.send(loginFlag)
      } else {
        res.send(loginFlag)
      }
    })
})



module.exports = router