import express from 'express';
import { form, submitMessage } from '../Controllers/formController.js';
import { validateMessage } from './messageValidator.js';

const formRouter = express.Router();

formRouter.get('/new', form);
formRouter.post('/new', validateMessage, submitMessage)

export default formRouter;
