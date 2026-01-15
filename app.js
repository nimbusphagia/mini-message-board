import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './Routes/indexRouter.js';
import formRouter from './Routes/formRouter.js'
import messageRouter from './Routes/messageRouter.js';

const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);
app.use(formRouter);
app.use(messageRouter);

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
});
