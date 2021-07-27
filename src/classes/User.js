export default class User {
  username;
  avatar;

  constructor(data) {
    this.username = data.username;
    this.avatar = data.avatar;
  }
}
