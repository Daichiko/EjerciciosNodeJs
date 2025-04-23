require("./listeners/emailListener");
require("./listeners/statsListener");

const registerUser = require("./userRegister");

const user1 = { id: 1, email: "user1@example.com", name: "Jhon Doe" };
const user2 = { id: 2, email: "user2@example.com", name: "Jane Doe" };

registerUser(user1);
registerUser(user2);
