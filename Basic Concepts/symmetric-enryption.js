/*Creating cipher.
Encryption also has an initialization vector (IV) to randomize the pattern so a sequence of text won’t produce the same output as a previous sequence.
iv in createCipheriv stands for *Initialization Vector* 
*/
const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

/// Cipher

const message = 'Encrypting a message';
//defining key as 32 random bytes and iv as 16 random bytes
//this will randomise the output when it's encrypted
//preventing identical sequences of text
const key = randomBytes(32);
const iv = randomBytes(16);

//aes:: Advanced Encryption Standard
const cipher = createCipheriv('aes256', key, iv);

/// Encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');
console.log(`Deciphered: ${decryptedMessage.toString('utf-8')}`);