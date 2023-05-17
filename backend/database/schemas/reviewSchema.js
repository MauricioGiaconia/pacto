const { Schema } = require("mongoose")

const reviewSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId
    },
    calification: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: String,

    state: {
        type: String,
        enum: ["Active", "desactived", "blocked"],
        default: "Active"
    },
    client: { type: Schema.Types.ObjectId, ref: "User" },
    vendor: { type: Schema.Types.ObjectId, ref: "User" },

}, { versionKey: false })

module.exports = reviewSchema