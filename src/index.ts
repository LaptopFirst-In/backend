import http from "http";
import cors from "cors";
import express from "express";



import router from "./routers";

const PORT = 3000;

const app = express();

app.use(
  cors({
    credentials: true,
  })
);


const server = http.createServer(app);
server.listen(PORT, () => {
  console.log("Server listening on port " + PORT + " http://localhost:3000/");
});
app.use("/", router());