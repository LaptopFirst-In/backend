import express from "express";
import {aadhaarData} from '../controllers/aadhaar'

export default (router: express.Router) => {
  router.post("/aadhaar", aadhaarData);
};