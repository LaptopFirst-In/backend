import express from "express";
import axios from "axios";
import {generateSignature} from '../helpers';
import config from '../config';
export const registerAadhaar = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const signature = generateSignature();
    const options = {
      method: 'POST',
      url: config.cashfreeurl +'/otp',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-client-id': config.cashfreeCliendId,
        'x-client-secret': config.cashfreeClientSecret,
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
