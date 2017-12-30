# crypto-ecdh
>

## install
```sh
  yarn add crypto-ecdh
```
## usage

```js
const client = ecdh();
const server = ecdh();

const sharedClient = client.derive(pair.public);
const sharedServer = pair.derive(client.public);

client.encrypt('this is a test')
  .then(cipher => pair.decrypt(cipher))
  .then(data => tape.equal(data, 'this is a test', 'encrypt/decrypt'))

```
