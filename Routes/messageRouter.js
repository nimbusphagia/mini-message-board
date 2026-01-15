import express from "express";
import message from '../Controllers/messageController.js';
import { validateMessageId } from "./messageValidator.js";

const messageRouter = express.Router();

messageRouter.get('/messages/:messageId', validateMessageId, message)

export default messageRouter;
