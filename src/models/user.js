export default class User {
  constructor(username, password, tokenJWT) {
    this.username = username;
    this.password = password;
    this.tokenJWT = tokenJWT;
  }
}
