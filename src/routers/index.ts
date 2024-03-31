import express from "express";
import aadhaar from "./aadhaar";

const router = express.Router();

export default (): express.Router => {
  aadhaar(router);
  return router;
};