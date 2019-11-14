//need databse functions for creating users, reading list of users, updating passwords, deleting users

const environment= process.env.NODE_ENV || 'development'
const config = require ('../../../knexfile')[environment]
const connection = require ('knex')(config)

//function which returns all users from database (but not passwords?)
function getAllUsers (db = connection) {
    return db('users').select()
}

//function which returns a single user
function getUser (user, db = connection) {
    return db('users')
        .where('username', user.username)
        .first()
}

//function which adds a new user into the database
function addNewUser (user, db = connection) {
    // if (getUser(user.username) == undefined) {
        return db('users')
        .insert(user)
    // }
    // else {
    //     return "no way jose"
    // } 
}

//function which edits a username
function editUsername (userId, username, db = connection) {
    return db('users').where('id', userId).update(username)
}

module.exports = { 
    getAllUsers,
    getUser,
    addNewUser,
    editUsername
}
