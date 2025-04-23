const notifier = require("./notifier");

function registerUser(user) {
  notifier.emit("userRegistered", user);
  return user;
}

module.exports = registerUser;
