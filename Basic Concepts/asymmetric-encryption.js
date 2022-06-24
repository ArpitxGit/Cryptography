//using publicEncrypt, privateDecrypt and publickey, private key, all set
const {  publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

//const TheMessage = 'secret message'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(TheMessage)
  );


console.log(encryptedData.toString('hex'))


const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedData.toString('utf-8'));