import express from "express";
import { home } from "../controller/homeController.js";
import { deleteWrite, detail, getEditWrite, getWrite, postEditWrite, postWrite } from "../controller/postController.js";
export const globalRouter = express.Router();


globalRouter.get('/', home);
globalRouter.get('/write', getWrite);
globalRouter.post('/write', postWrite);
globalRouter.get('/detail', detail);
globalRouter.get('/detail/:id/edit', getEditWrite);
globalRouter.post('/detail/:id/edit', postEditWrite);
globalRouter.delete('/detail/:id/delete', deleteWrite);