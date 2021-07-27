import User from "./User";

export default class Message {
  id;
  publishedBy;
  body;
  timestamp;

  constructor(data) {
    const { messageData, userData } = data;
    this.id = messageData.id;
    this.publishedBy = new User(userData);
    this.body = messageData.message;
    this.timestamp = messageData.timestamp;
  }
}
