import mockMessages from "../../__mocks__/mockMessages";

export default {
  getById: (id) => mockMessages.find((message) => message.id === id),
  getByUserId: (id) => mockMessages.filter((message) => message.userId === id),
  insertMessage: (message) => {
    // put message in DB, autopopulating its ID and timestamp in the process
    return;
  },
};
