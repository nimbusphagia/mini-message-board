import { validationResult } from "express-validator";
import { addMessage } from "../db/index.js";

const form = (req, res) => {
  res.render("form", { currentPath: req.path, errors: null });
};

async function submitMessage(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("form", {
      currentPath: req.path,
      errors: errors.array(),
      values: req.body,
    });
  }

  const { user, text } = req.body;

  await addMessage(user, text);
  res.redirect("/");
}

export { form, submitMessage };

