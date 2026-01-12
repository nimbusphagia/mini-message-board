import messages from '../db.js';
const home = (req, res) => {
  const orderedMessages = [...messages].sort(
    (a, b) => b.added - a.added
  );
  res.render("index", {
    messages: orderedMessages,
    currentPath: req.path,
  });
}
export { home };
