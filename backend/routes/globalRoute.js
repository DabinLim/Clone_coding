const express = require("express");
const { deleteWrite, detail, getEditWrite, getWrite, postEditWrite, postWrite } = require("../controller/postController.js");
const globalRouter = express.Router();


globalRouter.get('/write', getWrite);
globalRouter.get('/detail/:id', detail);
globalRouter.get('/detail/:id/edit', getEditWrite);
globalRouter.post('/detail/:id/edit', postEditWrite);
globalRouter.delete('/detail/:id/delete', deleteWrite);

module.exports = {globalRouter};
//이거 이렇게 export하는게 맞나요..?