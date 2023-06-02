const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio:{type: String, required: true},
    categoria: {type: String, required: true},
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product