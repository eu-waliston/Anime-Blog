const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    user_first_name: { String },
    user_last_name: { String },
    user_nasc_date: { Date },
    user_email: { String },
    user_password: { String }
})


module.exports = mongoose.model("User", UserSchema);
