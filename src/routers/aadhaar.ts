import express from "express";
import {registerAadhaar} from '../controllers/aadhaarOtpSent'
import { verifyAaadhar } from "../controllers/aadhaarOtpVerify";

export default (router: express.Router) => {
  router.post("/registerAadhaar", registerAadhaar);
  router.post("/verifyAadhaar", verifyAaadhar);
  router.get('/hello', ()=>{"Hello Bro"})
};