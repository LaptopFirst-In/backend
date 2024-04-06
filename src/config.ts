const config= {
    development: {
      cashfreeurl: 'https://sandbox.cashfree.com/verification/offline-aadhaar',
      cashfreeCliendId : '',
      cashfreeClientSecret:'',
      cashfreepublickey:  '',

    },
  
    production: {
      cashfreeurl: 'https://api.cashfree.com/verification',
      cashfreeCliendId:'',
      cashfreeClientSecret:'',
      cashfreepublickey:''
    },
  };
  
  export default config.development;