const mongooose = require("mongoose");

const userSchema = mongooose.Schema({
    name: String,
    username: String,
    password:String,
    age: String,
});
const userModel = mongooose.model("practical12",userSchema,"practical12");
module.exports = userModel;