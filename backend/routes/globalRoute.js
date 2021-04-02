import express from "express";
import { home } from "../controller/homeController.js";
export const globalRouter = express.Router();


globalRouter.get('/', home);