"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
var Products_1 = require("../models/Products");
var Products_2 = require("../models/Products");
function getAllProducts(req, res, next) {
    //Obtenemos todos los productos de la base de datos
    //Select * from products
    Products_2.default.find(function (err, products) {
        if (err) {
            res.status(500).json({ err: err });
        }
        else {
            res.status(200).json(products);
        }
    });
} //Fin de getAllProducts
exports.getAllProducts = getAllProducts;
function getProductById(req, res, next) {
    //Obtenemos el ID de la peticiòn 
    var id = req.params.id;
    //Buscamos el producto por IF
    Products_2.default.findById(id, function (err, product) {
        if (err) {
            res.status(500).json({ err: err });
        }
        else {
            res.status(200).json({ product: product });
        }
    });
} //Fin de getProductById
exports.getProductById = getProductById;
function createProduct(req, res, next) {
    //Obtenemos los parametros de la peticion req
    //Estos se encuentran en el objeto req.body
    var nombre = req.body.nombre;
    var precio = req.body.precio;
    var anio = req.body.anio;
    //Validamos que exista la informacion antes de guardarla
    if (!nombre) {
        //Enviamos un mensaje de tipo 422 para indicar que el campo es requerido
        res.status(422).json({ err: 'Nombre requerido' });
        return;
    }
    if (!precio) {
        //Enviamos un mensaje de tipo 422 para indicar que el campo es requerido
        res.status(422).json({ err: 'Precio requerido' });
        return;
    }
    if (!anio) {
        //Enviamos un mensaje de tipo 422 para indicar que el campo es requerido
        res.status(422).json({ err: 'Año requerido' });
        return;
    }
    //Crear el objeto del producto para guardarlo en la bd
    var product = new Products_1.default({
        nombre: nombre,
        precio: precio,
        anio: anio
    });
    product.save(function (err, post) {
        if (err) {
            res.status(500).json({ err: err });
        }
        else {
            res.status(200).json({ product: product });
        }
    });
} //Fin de createProduct
exports.createProduct = createProduct;
function updateProduct(req, res, next) {
    //Obtenemos el id para actualizar 
    var id = req.params.id;
    //Actualizamos el producto, buscandolo por id y enviandole
    //en el req.body los datos del producto a actualizar
    Products_2.default.findByIdAndUpdate(id, req.body, function (err, product) {
        if (err)
            res.status(500).json({ err: err });
        else
            res.status(200).json(product);
    });
} //Fin de updateProduct
exports.updateProduct = updateProduct;
function deleteProduct(req, res, next) {
    //Obtenemos el id para eliminar
    var id = req.params.id;
    //Eliminamos el producto por id y enviamos en el res
    //los datos del producto eliminado
    Products_2.default.findByIdAndRemove(id, {}, function (err, product) {
        if (err)
            res.status(500).json({ err: err });
        else
            res.status(200).json({ product: product });
    });
} //Fin de deleteProduct
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=ProductsControllers.js.map