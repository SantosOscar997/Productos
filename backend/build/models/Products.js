"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductsSchema = new Schema({
    nombre: {
        type: String,
        default: '',
        required: true
    },
    precio: {
        type: Number,
        default: 0.0,
        required: true
    },
    anio: {
        type: Number,
        default: 2021,
        required: true
    },
});
exports.default = mongoose.model('Products', ProductsSchema);
//# sourceMappingURL=Products.js.map