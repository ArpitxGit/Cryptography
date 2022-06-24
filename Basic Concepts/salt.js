/*
We are hashing a password with salt 
by importing "scrypt"(a password based key derivation function)
and the random bytes function
*/
const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

//defined function for signup and login that takes emails and password as arguments
//when a user signs up, we generate a salt which is just a random set of characters
//then using "scrypt" to hash it, providing password with salt and a keylength(64) 
function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    //storing the salt with hash
    const user = { email, password: `${salt}:${hashedPassword}` }
  
    users.push(user);

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);
    
    //grabbing the salt and recreate the original hash
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
  
    const keyBuffer = Buffer.from(key, 'hex');
    
    //using "timingSafeEqual" function that can prevent "TIMING ATTACK" 
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    
    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
}

const users = [];

const user = signup('foo@bar.com', 'pa$$word');

console.log(user)

const result = login('foo@bar.com', 'password')

console.log(result)