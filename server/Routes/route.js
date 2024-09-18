import express from "express";
import router from "./auth.js";

const route = express.Router();

route.use("/api/v1", router);

export default route;
