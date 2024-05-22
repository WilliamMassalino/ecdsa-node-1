const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { randomBytes } = require("crypto");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = randomBytes(32);

console.log('private key: ', toHex(privateKey));

const publicKey = secp256k1.getPublicKey(privateKey);

console.log('public key: ', toHex(publicKey));