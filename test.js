const test = require('tape');
const ecdh = require('./ecdh.js');

test('ready', tape => {
  tape.plan(3);
  const pair = ecdh();
  const client = ecdh();
  const sharedClient = client.derive(pair.public);
  const sharedServer = pair.derive(client.public);
  tape.equal(sharedClient.toString('hex'), sharedServer.toString('hex'), 'shared secret');
  tape.notEqual(client.private, undefined, 'private key');
  client.encrypt('this is a test')
    .then(cipher => pair.decrypt(cipher))
    .then(data => tape.equal(data, 'this is a test', 'encrypt/decrypt'))
})
