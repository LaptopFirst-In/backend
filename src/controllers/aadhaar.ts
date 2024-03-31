import express from "express";

export const aadhaarData = async (req: express.Request, res: express.Response) => {
    try {
      
      return res.status(200).send({ message: "msg from server" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ error: "Internal server error", success: false });
    }
  };