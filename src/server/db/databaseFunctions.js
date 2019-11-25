
const environment= process.env.NODE_ENV || 'development'
const config = require ('../../../knexfile')[environment]
const connection = require ('knex')(config)

const crypto = require('crypto')

module.exports = {
    createUser,
    userExists,
    getUserByName,
    generateHash
}

function generateHash(plainText) {
    let hash = crypto.createHash('sha256')
        .update(plainText)
        .digest('hex');
    return hash
}

function createUser (user, db = connection) {
  return userExists(user.username, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => generateHash(user.password))
    .then(passwordHash => {
      return db('users').insert({ username: user.username, hash: passwordHash })
    })
}

function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, db = connection) {
  console.log(username)
  return db('users')
    .select()
    .where('username', username)
    .first()
}




// Old Code
// // //function which returns all users from database (but not passwords?)
// function getAllUsers (db = connection) {
//     return db('users').select()
// }

// //function which checks if username and password are correct 
// function checkLogin (user, db = connection) {
//     return db('users')
//     .where('username', user.username)
//     .where('password', user.password)
//     .first()
// }

// //function which checks if a username is in the database, and is called prior to addNewUser
// function checkUsername (user, db = connection) {
// return db('users')
//         .where('username', user.username)
//         .first()
// }

// //function which adds a new user into the database
// function addNewUser (user, db = connection) {
//         return db('users')
//         .insert(user)
  
// }

// // //function which edits a username
// // function editUsername (userId, username, db = connection) {
// //     return db('users').where('id', userId).update(username)
// // }

// module.exports = { 
//     getAllUsers,
//     checkLogin,
//     checkUsername,
//     addNewUser,
//     // editUsername
// }
