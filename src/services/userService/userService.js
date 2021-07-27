import userRepository from "../../repositories/userRepository";
import User from "../../classes/User";

export default {
  get: (id) => {
    const userData = userRepository.getById(id);
    const returnUser = new User(userData);

    return returnUser;
  },
  getRawData: (id) => {
    const userData = userRepository.getById(id);

    return userData;
  },
  updateFollows: (userId, followId) => {
    const userData = userRepository.getById(userId);
    // create a new array from existing follows and new one. Use Set to ensure no duplicates
    const updatedFollows = Array.from(
      new Set([...userData.follows, +followId])
    );
    const updatedUser = { ...userData, follows: updatedFollows };
    updatedUser.follows.sort();

    // this.updateUser(updatedUser);
    return updatedUser.follows;
  },
  updateUser(user) {
    // do DB insert here
    return;
  },
};
