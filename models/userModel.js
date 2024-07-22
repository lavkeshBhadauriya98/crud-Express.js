const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        maxlength: [20,'name must be less than 20 char']
    },
   
    email: {
        type: String,
        required: [true, 'email is required'],
        trim: true,
        maxlength: [40,'email must be less than 20 char']
    },
   
});

module.exports = mongoose.model("user", userSchema)