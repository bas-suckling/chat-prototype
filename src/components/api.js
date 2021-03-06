import apiRequest from 'superagent'

export function addNewUser(userData) {
    return apiRequest
    .post('/api/v1/users')
    .send(userData)
    .then(res => res.body)
}

export function checkLogin(userData) {
    return apiRequest
    .post('api/v1/users/login')
    .send(userData)
    .then(res => res.body)
}