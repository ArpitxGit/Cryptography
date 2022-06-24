//importing a createHash function from node.js build-in module "crypto"
const { createHash } = require('crypto');

// Create a string hash
/*
taking a string input and return and hash string as an output
defining the hashing algorithm, here using SHA256(Secure Hash Algorithm)
returns a hash value which is also called as digest, of size 256 bits
usinh hexadecimal format
*/

function hash(str) {
    return createHash('sha256').update(str).digest('hex');
}

// Compare two hashed passwords

let password = 'my-pass!';
const hash1 = hash(password);
console.log(hash1)

/// ... some time later

password = 'my-pass!';
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match ? '✔️  good password' : '❌  password does not match');