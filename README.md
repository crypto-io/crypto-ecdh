# crypto-ecdh
[![Travis branch](https://img.shields.io/travis/crypto-io/crypto-ecdh/master.svg?style=for-the-badge)](https://travis-ci.org/crypto-io/crypto-ecdh)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/crypto-io/crypto-ecdh/Node.js%20CI?style=for-the-badge)
[![npm](https://img.shields.io/npm/dt/crypto-ecdh.svg?style=for-the-badge)](https://www.npmjs.com/package/crypto-ecdh)
[![David](https://img.shields.io/david/crypto-io/crypto-ecdh.svg?style=for-the-badge)](https://github.com/crypto-io/crypto-ecdh)
[![npm](https://img.shields.io/npm/v/crypto-ecdh.svg?style=for-the-badge)](https://www.npmjs.com/package/crypto-ecdh)

>

## install
```sh
  yarn add crypto-ecdh
```
## usage

```js
const client = ecdh();
const server = ecdh();

const sharedClient = client.derive(server.public);
const sharedServer = server.derive(client.public);

client.encrypt('this is a test')
  .then(cipher => server.decrypt(cipher))
  .then(data => tape.equal(data, 'this is a test', 'encrypt/decrypt'))

```

## development

### install builder/compiler
```sh
npm i -g backed-cli
```

### build
```sh
backed -b
```
