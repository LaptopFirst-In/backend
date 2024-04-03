import express from "express";
import axios from "axios";
import {generateSignature} from '../helpers'
export const registerAadhaar = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const signature = generateSignature();
    const options = {
      method: 'POST',
      url: 'https://sandbox.cashfree.com/verification/offline-aadhaar/otp',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-client-id': 'CF10117541CO4NB3LM103MD67HR8J0',
        'x-client-secret': 'cfsk_ma_test_16eb5333e806bd98f531dae85fdc4365_4610ceba',
        "x-cf-signature": signature,
      },
      data: { aadhaar_number: req.headers.aadhaar_number },
    };
    const response = await axios.request(options);
    console.log(response.data);
    return res.status(200).send({ data: response.data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ error: "Internal server error", success: false });
  }
};
