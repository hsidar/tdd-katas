import mockUsers from "../../__mocks__/mockUsers";

export default {
  getById: (id) => mockUsers.find((user) => user.id === id),
};
