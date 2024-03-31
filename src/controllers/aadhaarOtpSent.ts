import express from "express";
import axios from "axios";
export const registerAadhaar = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const options = {
      method: "POST",
      url: "https://sandbox.cashfree.com/verification/offline-aadhaar/otp",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-client-id": "CF10117541CO4NB3LM103MD67HR8J0",
        "x-client-secret":
          "cfsk_ma_test_16eb5333e806bd98f531dae85fdc4365_4610ceba",
      },
      data: { aadhaar_number: "655675523712" },
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      
      return res.status(200).send({ message: response.data.message });
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ error: "Internal server error", success: false });
  }
};
