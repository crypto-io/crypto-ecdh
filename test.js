const test = require('tape');
const ecdh = require('./dist/commonjs/ecdh.js');

test('ready', tape => {
  tape.plan(3);
  const server = ecdh();
  const client = ecdh();
  const sharedClient = client.derive(server.public);
  const sharedServer = server.derive(client.public);
  tape.equal(sharedClient.toString('hex'), sharedServer.toString('hex'), 'shared secret');
  tape.notEqual(client.private, undefined, 'private key');
  client.encrypt('this is a test')
    .then(cipher => server.decrypt(cipher))
    .then(data => tape.equal(data, 'this is a test', 'encrypt/decrypt'))
})
