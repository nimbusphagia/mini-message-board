import { param, body } from "express-validator";

const validateMessageId = [
  param("messageId")
    .isInt({ min: 1 })
    .withMessage("messageId must be a positive integer")
    .toInt(),
];
const validateMessage = [
  body("user")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ max: 50 })
    .withMessage("Username must be at most 50 characters")
    .escape(),

  body("text")
    .trim()
    .notEmpty()
    .withMessage("Message text is required")
    .isLength({ max: 500 })
    .withMessage("Message must be at most 500 characters")
    .escape(),
];

export { validateMessage, validateMessageId };
