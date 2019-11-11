const rug = require('random-username-generator');
function generateUsername () {
    return rug.generate()
}

module.exports = generateUsername