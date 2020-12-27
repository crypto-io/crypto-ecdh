import { encrypt, decrypt } from 'crypto-io-utils';
import crypto from 'crypto';

export default (encoding = 'hex') => {
  let secret;
  // Generate keys
  const ecdh = crypto.createECDH('secp256k1');
  const pair = ecdh.generateKeys(encoding);
  return {
    derive: pub => secret = ecdh.computeSecret(pub, encoding).toString(encoding),
    public: ecdh.getPublicKey(encoding, 'compressed'),
    private: ecdh.getPrivateKey(encoding, 'compressed'),
    encrypt: data => encrypt(data, secret),
    decrypt: data => decrypt(data, secret)
  }
}
