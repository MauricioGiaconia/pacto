const { Schema } = require("mongoose")

// Schema de departamentos
const departmentSchema = new Schema({
    codeDane: String,
    department: String
});

module.exports = departmentSchema;