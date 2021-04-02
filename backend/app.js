import express from "express";
import { globalRouter } from "./routes/globalRoute.js";
const app = express();


app.use(express.json());
app.use('/public', express.static('public'));
app.use('/', globalRouter);


export default app;
