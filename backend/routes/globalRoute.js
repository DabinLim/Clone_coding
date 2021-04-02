import express from "express";
import { home } from "../controller/homeController.js";
import { getWrite, postWrite } from "../controller/postController.js";
export const globalRouter = express.Router();


globalRouter.get('/', home);
globalRouter.get('/write', getWrite);
globalRouter.post('/write', postWrite);