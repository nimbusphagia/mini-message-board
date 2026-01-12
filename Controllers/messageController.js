import Message from '../Models/Message.js';
import db from '../db.js';

const form = (req, res) => {
  res.render("form", { currentPath: req.path });
}
const addMessage = (req, res) => {
  const { text, user } = req.body;

  if (!text || !user) {
    return res.status(400).render("form", {
      currentPath: req.path,
      error: "Both fields are required"
    });
  }

  const message = new Message(text.trim(), user.trim());
  db.push(message);

  res.redirect("/");
};

export { form, addMessage };
