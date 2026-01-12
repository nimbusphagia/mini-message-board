import messages from '../db.js';
const home = (req, res) => {
  //res.render("index", { messages: messages });
  res.send('Hello Man')
}
export { home };
