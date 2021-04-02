import express from "express";
export const globalRouter = express.Router();

globalRouter.get('/', home);