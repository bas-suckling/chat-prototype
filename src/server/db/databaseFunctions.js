//need databse functions for creating users, reading list of users, updating passwords, deleting users

const environment= process.env.NODE_ENV || 'development'
const config = require ('../../../knexfile')[environment]
const connection = require ('knex')(config)

//function which returns all users from database (but not passwords?)
export function getAllUsers (db = connection) {
    return db('users').select()
}

//function which returns a single user
export function getUser (username, db = connection) {
    return db('users')
        .where('username', username)
        .first()
}

//function which adds a new user into the database
export function addNewUser (user, db = conneciton) {
    return db('users')
        .insert(user)
}

//function which edits a username
export function editUsername (userId, username, db = connection) {
    return db('users').where('id', userId).update(username)
}

