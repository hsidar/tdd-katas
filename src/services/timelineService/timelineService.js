import messageService from "../messageService/messageService";
import userService from "../userService";

export default {
  get: (id) => {
    const usersOwnMessages = messageService.getAllForUserId(id);
    return usersOwnMessages;
  },
  getAggregate: (id) => {
    const user = userService.getRawData(id);

    let aggregateMessages = [];

    // Get all messages for this user as part of their timeline.
    const usersOwnMessages = messageService.getAllForUserId(id);
    aggregateMessages = [...aggregateMessages, ...usersOwnMessages];

    // For every followed user, get all their messages and add them to the aggregate array
    user.follows.map((userId) => {
      const userMessages = messageService.getAllForUserId(userId);
      aggregateMessages = [...aggregateMessages, ...userMessages];
    });

    // Sort the lot by timestamp
    aggregateMessages.sort(function (x, y) {
      return x.timestamp - y.timestamp;
    });

    return aggregateMessages;
  },
};
