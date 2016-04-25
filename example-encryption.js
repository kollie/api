var crypto = require('crypto-js');

var secretMessage = {
	name: 'Israel',
	secretName: '009'
};
var secretKey = '123abc';


//encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encrypted Message: ' + encryptedMessage);


//decrypt
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log('Decrypted Message: ' + decryptedMessage);
console.log(decryptedMessage.secretName);