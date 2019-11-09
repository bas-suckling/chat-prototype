const crypto = require('crypto');

// let key = '12345678123456781234567812345678' //must be a 32bit string
let iv = '1234567812345678' // must be a 16 bit string

function encrypt(text, key) {
    //takes a message as string and returns an object containing the initialisation vector as a hex string, and the encoded message as a hex string.
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv)
    let encrypted = cipher.update(text)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return encrypted.toString()
}

function decrypt(text, key) {
    //takes an ecrypted hex string and returns the decrypted message as a string
    let ivHex = iv.toString('hex')
    let encryptedText = Buffer.from(text, 'hex')
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), ivHex)
    let decrypted = decipher.update(encryptedText)
    decrypted = Buffer.concat([decrypted, decipher.final()])
    return decrypted.toString()
}

function hash(text) {
    let hashKey = crypto.createHash('sha1')
        .update(text)
        .digest('hex');
    return hashKey.substring(0, 32)
}


//initialisation vector and key are hard coded, but can be generated using the functions below
// function generateKey() {
//     return key = crypto.randomBytes(32);
// }

// function generateIV() {
//     return iv = crypto.randomBytes(16)
// }


module.exports = {
    encrypt,
    decrypt,
    // generateKey,
    // generateIV,
    hash
}