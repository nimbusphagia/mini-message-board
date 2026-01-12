import express from 'express';
import { home } from '../Controllers/indexController.js';

const indexRouter = express.Router();

indexRouter.get('/', home);

export default indexRouter;
