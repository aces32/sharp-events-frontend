import CryptoJS from 'crypto-js';

const salt = (process.env.REACT_APP_CLIENT_ID as string).padStart(24, '0');
const saltBytes = salt.padStart(24, '0');
const keyBytes = saltBytes.substring(0, 24); // AES-192 uses 24 bytes key
const iv = process.env.REACT_APP_ENCRYPTION_IV as string;

export default function encrypt(text: any) {
  if (!text) {
    throw new Error('Text cannot be null or empty');
  }

  // Encrypt the text using CryptoJS
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(text), CryptoJS.enc.Utf8.parse(keyBytes), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString(); // Encrypted string in Base64
}
