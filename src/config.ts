const config= {
    development: {
      cashfreeurl: 'https://sandbox.cashfree.com/verification/offline-aadhaar',
      cashfreeCliendId : 'CF10117541CO4NB3LM103MD67HR8J0',
      cashfreeClientSecret:'cfsk_ma_test_16eb5333e806bd98f531dae85fdc4365_4610ceba',
      cashfreepublickey:   `-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsgIBaO+D/VCpQx2Dbsn2JVZjH8tAfG+tFH3d7wQssteQ6A0664ujXUUhR9ovIaess5x68z2JwaVmYLJ9ZoFolUFmKltISNhbsOW8iK+i5kgTjGpjMfeMIuQlPq71j+ulC9IGrtr3UyBjMxmB5eLun3vZowFwsqwa3YLawBvC8H02ABWTYXt2NzYgw1q2jpWKR7XS/8sD0EcMPWbaejxOImKBKc2y8RFBEvBXqUnnUYKk25ey022w9apnslF3Nv+4+mjwrDqt2fF5S3UKAbgN07SMNqwwq0cQlnDOlmTNGebsfQrEN585UcN1JjOzYu5f6a32vrPX/Mbf23SyeIFsOwIDAQAB\n-----END PUBLIC KEY-----`,

    },
  
    production: {
      cashfreeurl: 'https://api.cashfree.com/verification',
      cashfreeCliendId:'CF623592CO1HVIE9F16DQGRB0RC0',
      cashfreeClientSecret:'cfsk_ma_prod_e3f90376066ac3a693dd97520a442150_b7333f52',
      cashfreepublickey:''
    },
  };
  
  export default config.production;