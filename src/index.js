import * as elliptic from 'elliptic';
import { encrypt, decrypt } from 'crypto-io-utils';
const EC = elliptic.ec
const ec = new EC('curve25519');

export default (pair) => {
  const store = {};
  // Generate keys
  if (!pair) pair = ec.genKeyPair();
  return {
    pair: pair,
    derive: pub => store.secret = pair.derive(pub),
    public: pair.getPublic(),
    encrypt: data => encrypt(data, store.secret.toString(16)),
    decrypt: data => {
      if (!data) {
        // try reading from our stored values when data is not defined
        data = store.data;
        if (!data) {
          return 'error: data undefined'
        }
      }
      // decrypt given or stored data
      return decrypt(data, store.secret.toString(16))
    },
    lock: data => store.data = encrypt(data, store.secret.toString(16)),
    unlock: data => decrypt(store.data, store.secret.toString(16)),
  }
}
