import express from "express";
import { getProducts, addProduct } from "./v1/catalog-routes";

export const v1Route = express.Router();

const catalogRoute = express.Router();

v1Route.use("/catalog", catalogRoute);
catalogRoute.get("/getProducts", getProducts);
catalogRoute.post("/addProduct", addProduct);
