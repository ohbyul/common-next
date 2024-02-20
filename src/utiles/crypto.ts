import CryptoJS from 'crypto-js';

const SECRET_KEY = 'urban123!@$'

/***************************************
 * @description 암호화
 * @param {string} value 암호화할 아이디 값
 * @returns encrypt value
 ****************************************/
export const encrypt = (value: string | number) => {
  const data = { id: value.toString() };
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY);
  const result = encrypted.toString();

  return encodeURIComponent(result)
}

/***************************************
 * @description 복호화
 * @param {string} value 암호화할 아이디 값
 * @returns encrypt value
 ****************************************/
export const decrypt = (value: string) => {
  if (value) {
    const bytes = CryptoJS.AES.decrypt(value, SECRET_KEY);
    const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decrypted;
  }
}
