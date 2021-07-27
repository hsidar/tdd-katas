import messageRepository from "../../repositories/messageRepository";
import userService from "../userService";
import Message from "../../classes/Message";

export default {
  get: (messageId, userId) => {
    const userData = userService.get(userId);
    const messageData = messageRepository.getById(messageId);
    const returnMessage = new Message({ messageData, userData });

    return returnMessage;
  },
  getAllForUserId: (id) => {
    const userData = userService.get(id);
    const messagesData = messageRepository.getByUserId(id);
    const returnMessages = messagesData.map((messageData) => {
      return new Message({ messageData, userData });
    });

    return returnMessages;
  },
  insertMessage(userId, message) {
    const newMessage = {
      userId,
      message,
    };

    messageRepository.insertMessage(newMessage);
  },
};
