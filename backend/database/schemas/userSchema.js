const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name:
    {
        type: String,
        required: true
    },
    calification: {
        type: Number,
        // cont: Number,
    },
    email:
    {
        type: String,
        unique: true,
        required: true,
    },
    state: Boolean,
    phone: Number,
    password: String,
    address: String,
    //reviewReceived: { type: Schema.Types.ObjectId, ref: "Review" },
    //reviewPost: { type: Schema.Types.ObjectId, ref: "Review" },
    //questions: { type: Schema.Types.ObjectId, ref: "Question" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    //wallet: { type: Schema.Types.ObjectId, ref: "Wallet" }

})


module.exports = userSchema

