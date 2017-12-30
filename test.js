const test = require('tape');
const ecdh = require('./ecdh.js');

test('ready', tape => {
  tape.plan(3);
  const pair = ecdh();
  const clone = ecdh(pair.pair);
  tape.equal(pair.public.toString(16), clone.public.toString(16), 'cloned');

  const client = ecdh();
  const sharedClient = client.derive(pair.public);
  const sharedServer = pair.derive(client.public);
  tape.equal(sharedClient.toString(16), sharedServer.toString(16), 'shared secret');

  client.encrypt('this is a test')
    .then(cipher => pair.decrypt(cipher))
    .then(data => tape.equal(data, 'this is a test', 'encrypt/decrypt'))
})
