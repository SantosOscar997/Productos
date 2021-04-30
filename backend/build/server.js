"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos las librerias del proyecto
var express = require("express");
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
//Importar las rutas del API
var routes_1 = require("./router/routes");
//Importampos la configuracion que está en el archivo aun
var main_1 = require("./config/main");
//Inicializamos express
var app = express();
//Inicializamos mongoose
mongoose.connect(main_1.default.db, main_1.default.dbparams)
    .then(function () { return console.log("Base de datos conectada"); })
    .catch(function (err) { return console.log(err); });
//Configurar de Middlewares
app.use(express.urlencoded());
//urlencoded es para recibir los datos del formulario en formato de texto, no incluye imagenes
app.use(express.json()); //Reciba los datos en formato json
app.use(cookieParser()); //Manejo de los cookies de la sesión
app.use(logger('dev')); //manejo de los logs de la aplicacion
app.use(helmet()); //Para asegurar los encabezados http
app.use(cors()); // para permitir peticiones
//Configurar las rutas
routes_1.default(app);
//Inicializando el servidor
//Dependiendo de nuestro archivo de configuración
var server;
if (process.env.NODE_ENV != main_1.default.test_env) {
    server = app.listen(main_1.default.port, function () {
        console.log("Servidor conectado al puerto " + main_1.default.port);
    });
}
else {
    server = app.listen(main_1.default.test_port, function () {
        console.log("Servidor conectado en el puerto " + main_1.default.test_port);
    });
} //Fin else
//# sourceMappingURL=server.js.map