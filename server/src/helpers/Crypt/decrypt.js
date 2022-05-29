import Crypto from 'crypto-js'

export const DecryptData = (data, secret) => {
  let decryptedText = Crypto.AES.decrypt(data, secret).toString(Crypto.enc.Utf8)

  return decryptedText
}
