export default class Message {
  id;
  text;
  user;
  added;
  constructor(text, user) {
    this.id = crypto.randomUUID();
    this.text = text;
    this.user = user;
    this.added = new Date();
  }
}
