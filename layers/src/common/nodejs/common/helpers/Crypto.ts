import * as CryptoJS from 'crypto-js';
/**
 * A class that abstracts the logic of crypto cypher-decypher functionalities.
 */
export class CypherGoliath {
  /**
   * @private the key used for encryption/decryption.
   */
  private cypherKey: string;

  /**
   * The constructor used for CypherGoliath.
   * @param key The key used for cipher/decipher.
   * @param key The algorithm used for cipher/decipher.
   */
  constructor(key: string) {
    this.cypherKey = key.padEnd(16, '0').substr(0, 16);
  }

  /**
   * Allows to create crypto to cypher data using a secret and an encryption algorithm.
   * @param plainText The text to be encrypted.
   * @returns The hash resulting in the cypher encryption.
   */
  cypher(plainText: string): string {
    const key = CryptoJS.enc.Utf8.parse(this.cypherKey);
    const iv1 = CryptoJS.enc.Utf8.parse(this.cypherKey);
    const encrypted = CryptoJS.AES.encrypt(plainText, key, {
      keySize: 16,
      iv: iv1,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });

    return encrypted + '';
  }

  /**
   * Allows to create crypto to decipher data using a secret and an encryption algorithm.
   * @param cipher The text to be decrypted.
   * @returns The hash resulting from the decryption.
   */
  decypher(cipher: string): string {
    const key = CryptoJS.enc.Utf8.parse(this.cypherKey);
    const iv1 = CryptoJS.enc.Utf8.parse(this.cypherKey);
    const plainText = CryptoJS.AES.decrypt(cipher, key, {
      keySize: 16,
      iv: iv1,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });

    return plainText.toString(CryptoJS.enc.Utf8);
  }
}
