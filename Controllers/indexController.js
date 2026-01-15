import { getMessages } from '../db/index.js';
async function home(req, res) {
  const messages = await getMessages();
  const orderedMessages = [...messages].sort(
    (a, b) => b.added - a.added
  );
  res.render("index", {
    messages: orderedMessages,
    currentPath: req.path,
  });
}
export { home };
