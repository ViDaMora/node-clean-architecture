'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});
var StudentSchema = mongoose_1.model('Student', schema);
exports.StudentSchema = StudentSchema;
