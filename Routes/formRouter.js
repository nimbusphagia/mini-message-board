import express from 'express';
import { form, addMessage } from '../Controllers/formController.js';

const formRouter = express.Router();

formRouter.get('/new', form);
formRouter.post('/new', addMessage)

export default formRouter;
