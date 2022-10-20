var ether = require('ethers');  
var cryptos = require('crypto');

var id = cryptos.randomBytes(32).toString('hex');
var privateKey = "0x"+id;
console.log("Privatekey plz DO NOT SHARE THIS:", privateKey);

var wallet = new ether.Wallet(privateKey);
console.log("Generated Address: " + wallet.address);
