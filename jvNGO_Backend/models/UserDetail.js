const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true},
    mobile: String,
    password: String,
    userType: String
}, {
    collection: "UserInfo",
});

module.exports = mongoose.model("UserInfo", UserDetailSchema);