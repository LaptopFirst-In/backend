import express from "express";
import axios from "axios";
import {generateSignature} from '../helpers';
import config from '../config';
export const verifyAaadhar = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const signature = generateSignature();
    const options = {
        method: 'POST',
        url: config.cashfreeurl+ '/verify',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'x-client-id': config.cashfreeCliendId,
          'x-client-secret': config.cashfreeClientSecret,
          "x-cf-signature": signature,
        },
        data: {otp: req.headers.otp, ref_id: req.headers.ref_id}
      };
      const response = await axios.request(options);
        return res.status(200).send({ data: response.data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ error: "Internal server error", success: false });
  }
};
