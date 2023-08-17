const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    user_first_name: {String, required: true},
    user_last_name: {String, required: true},
    user_nasc_date: {Date, required: true},
    user_email: {String, required: true},
    user_password: {String, required: true}
})


module.exports = mongoose.model("User", UserSchema);
