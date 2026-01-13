import express from "express";
import message from '../Controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.get('/messages/:messageId', message)

export default messageRouter;
