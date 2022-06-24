const { createHmac } = require('crypto');

const password = 'sheeesh-ecret!';
const message = 'Hellllooooo'

//creating hash using algorithm and also providing a key
const hmac = createHmac('sha256', password).update(message).digest('hex');

//different password , different hash
console.log(hmac)