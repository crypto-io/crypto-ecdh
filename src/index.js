import { encrypt, decrypt } from './../node_modules/crypto-io-utils/dist/utils-es.js';
import crypto from 'crypto';

export default (encoding) => {
  const store = {};
  // Generate keys
  const ecdh = crypto.createECDH('secp256k1');
  const pair = ecdh.generateKeys(encoding);
  return {
    derive: pub => store.secret = ecdh.computeSecret(pub, encoding),
    public: ecdh.getPublicKey(encoding, 'compressed'),
    encrypt: data => encrypt(data, store.secret.toString('hex')),
    decrypt: data => {
      if (!data) {
        // try reading from our stored values when data is not defined
        data = store.data;
        if (!data) {
          return 'error: data undefined'
        }
      }
      // decrypt given or stored data
      return decrypt(data, store.secret.toString('hex'))
    },
    lock: data => encrypt(data, store.secret.toString('hex')).then(data => store.data = data),
    unlock: data => decrypt(store.data, store.secret.toString('hex')),
  }
}
