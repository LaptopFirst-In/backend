import crypto from 'crypto';
import config from '../config';



  export const generateSignature = () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const dataToSign = `${config.cashfreeCliendId}.${timestamp}`;
    const encryptedData = crypto.publicEncrypt(config.cashfreepublickey, Buffer.from(dataToSign, 'utf-8'));
    return encryptedData.toString('base64');
  }

