import { validationResult } from "express-validator";
import { getMessageById } from "../db/index.js";

async function message(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("error", { errors: errors.array() });
  }

  const { messageId } = req.params;
  const message = await getMessageById(messageId);

  if (!message) {
    return res.status(404).render("404");
  }

  res.render("message", {
    message,
    currentPath: req.path,
  });
}

export default message;

