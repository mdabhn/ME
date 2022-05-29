import Crypto from 'crypto-js'

export const EncryptData = (data, secret) => {
  let ciphertext = Crypto.AES.encrypt(data, secret).toString()

  return ciphertext
}
