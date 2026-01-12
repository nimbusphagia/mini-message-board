import express from 'express';
import { form, addMessage } from '../Controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.get('/new', form);
messageRouter.post('/new', addMessage)

export default messageRouter;
