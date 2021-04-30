"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//Importar  las funciones del controlador
var ProductsControllers_1 = require("../controllers/ProductsControllers");
exports.default = (function (app) {
    //Rutas para nuestra api
    var apiRoutes = express.Router();
    //Rutas para el producto
    var productsRoutes = express.Router();
    /*
    *
    * Rutas para productos
    *
    */
    apiRoutes.use('/prductos', productsRoutes);
    //Obtener todos los productos
    productsRoutes.get('/', ProductsControllers_1.getAllProducts);
    //Obtener un producto por ID
    productsRoutes.get('/:id', ProductsControllers_1.getProductById);
    //Crear un producto
    productsRoutes.post('/', ProductsControllers_1.createProduct);
    //Actualizar un producto
    productsRoutes.put('/:id', ProductsControllers_1.updateProduct);
    //Eliminar un producto 
    productsRoutes.delete('/:id', ProductsControllers_1.deleteProduct);
    //Configuramos la ruta inicial
    app.use('/api/', apiRoutes);
});
//# sourceMappingURL=routes.js.map