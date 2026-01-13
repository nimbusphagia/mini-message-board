import { messages, getMessageById } from "../db.js";

const message = (req, res) => {
  const { messageId } = req.params;
  const message = getMessageById(messageId);
  res.render('message', { message: message, currentPath: req.path });
}
export default message;
