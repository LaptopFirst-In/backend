import express from "express";
import {aadhaarData} from '../controllers/aadhaarOtpSent'

export default (router: express.Router) => {
  router.post("/aadhaar", aadhaarData);
};