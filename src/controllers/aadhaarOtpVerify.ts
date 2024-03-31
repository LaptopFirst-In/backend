import express from "express";
import axios from "axios";
export const verifyAaadhar = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const options = {
        method: 'POST',
        url: 'https://sandbox.cashfree.com/verification/offline-aadhaar/verify',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'x-client-id': 'CF10117541CO4NB3LM103MD67HR8J0',
          'x-client-secret': 'cfsk_ma_test_16eb5333e806bd98f531dae85fdc4365_4610ceba'
        },
        data: {otp: req.body.otp, ref_id: req.body.ref_id}
      };
      axios.request(options).then(function (response) {
        return res.status(200).send({ data: response.data });
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ error: "Internal server error", success: false });
  }
};
