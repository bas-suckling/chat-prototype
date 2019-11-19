
const environment= process.env.NODE_ENV || 'development'
const config = require ('../../../knexfile')[environment]
const connection = require ('knex')(config)

// //function which returns all users from database (but not passwords?)
function getAllUsers (db = connection) {
    return db('users').select()
}

//function which checks if username and password are correct 
function checkLogin (user, db = connection) {
    return db('users')
    .where('username', user.username)
    .where('password', user.password)
    .first()
}

//function which checks if a username is in the database, and is called prior to addNewUser
function checkUsername (user, db = connection) {
return db('users')
        .where('username', user.username)
        .first()
}

//function which adds a new user into the database
function addNewUser (user, db = connection) {
        return db('users')
        .insert(user)
  
}

// //function which edits a username
// function editUsername (userId, username, db = connection) {
//     return db('users').where('id', userId).update(username)
// }

module.exports = { 
    getAllUsers,
    checkLogin,
    checkUsername,
    addNewUser,
    // editUsername
}
