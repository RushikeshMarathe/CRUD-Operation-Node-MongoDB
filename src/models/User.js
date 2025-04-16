const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },

    booksIssued:[{
        type: mongoose.Schema.Types.ObjectID,
        ref:"Library",
    }]
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
