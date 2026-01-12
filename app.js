import express from 'express';
import indexRouter from './Routes/indexRouter.js';

const app = express();
const port = process.env.PORT;

app.use(indexRouter);

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
});
