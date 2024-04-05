import crypto from 'crypto';


const clientId = 'CF10117541CO4NB3LM103MD67HR8J0';
  const publicKey = `-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsgIBaO+D/VCpQx2Dbsn2JVZjH8tAfG+tFH3d7wQssteQ6A0664ujXUUhR9ovIaess5x68z2JwaVmYLJ9ZoFolUFmKltISNhbsOW8iK+i5kgTjGpjMfeMIuQlPq71j+ulC9IGrtr3UyBjMxmB5eLun3vZowFwsqwa3YLawBvC8H02ABWTYXt2NzYgw1q2jpWKR7XS/8sD0EcMPWbaejxOImKBKc2y8RFBEvBXqUnnUYKk25ey022w9apnslF3Nv+4+mjwrDqt2fF5S3UKAbgN07SMNqwwq0cQlnDOlmTNGebsfQrEN585UcN1JjOzYu5f6a32vrPX/Mbf23SyeIFsOwIDAQAB\n-----END PUBLIC KEY-----`;

  export const generateSignature = () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const dataToSign = `${clientId}.${timestamp}`;
    const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(dataToSign, 'utf-8'));
    return encryptedData.toString('base64');
  }

