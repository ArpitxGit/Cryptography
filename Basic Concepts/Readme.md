## Essential Cryptography Concepts

1. Hash  
Hash means to chop and mix and that perfectly describes what a hashing function does.  
It takes an input value of any length and outputs a fixed length value.  
Hashing algorithms, like SHA (Secure Hashing Algorithm), produce a random, unique, fixed-length string from a given input.  
They are often used to compare two values, like passwords, for equality.  
Hashes are great for making passwords unreadable, but because they always produce the same output, they are not very secure.
* The same input will always produce the same output.
* Fast to compute, but computationally expensive to find the original input
* Small probability of collision (unique)

2. Salt
A salt is a random string that is added to the input before hashing.  
This makes the hash more unique and harder to guess.  
* Used to make a hash harder to guess
* Appends a random string to the input before hashing

3. HMAC
Hash Based Message Authentication Code  
HMAC is a keyed hash of data - like a hash with a password.  
To create a HMAC you need to have the key, therefore allowing you to verify both the authenticity and originator of the data.  
Using a different key produces a different output.  
* HMAC is a hash with a password or key
* Only someone with the key can create an authentic hash
* Example, JSON web token

**For sharing a secret with someone and also allowing them to read the original message, we need Encryption**  
With encryption, we take a message, scramble up the bytesto make it unreadable(called cipher text), then provide a key or password for allowing somebody elseto decrypt it.  
It is also typically randomized, so each time you encrypt, you get an entirely different encrypted output even if the key and message are the same. 

4. Symmetric Encryption
The same key is used to encrypt and decrypt the message.  
* The same input will produce a different output, unlike hashes
* Encrypted message can be reversed with the key
* Same key used to encrypt and decrypt message

**NOTE: Encryption Algorithms are inherently deifferent than Hashing Algorithms**  

Using a shared key works for encryption works, but the problem is that both parties must agree upon the key. This is problematic in the real world because it’s not practical or secure to share across a network.

5. Key Pair
Public-Key Cryptosystem, Public key , Private key  
Public Key for sharing while Private Key should be kept secret  

6. Asymmetric Encryption
Asymmetric encryption depends on two keys. Encrypt a message with the public key and decrypt it with the private key.

Asymmetric encryption is used on the web whenever you use HTTPS to establish an encrypted connection to that website. The browser finds the public key of an SSL certificate installed on the website, which is used to encrypt any data you send, then the private key decrypts it.  

7. Signing
Signing is the process of creating a digital signature of a message. A signature is a hash of the original message which is then encrypted with the sender’s private key.

The signature can be verified by the recipient using the public key of the sender. This can guarantee the original message is authentic and unmodified.  

