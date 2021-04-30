import Products from '../models/Products';
import Product from '../models/Products';

export function getAllProducts(req, res, next){

    //Obtenemos todos los productos de la base de datos
    //Select * from products
    Product.find((err, products) =>{
        if(err){
            res.status(500).json({err});
        }else{
            res.status(200).json(products);
        }
    });
}//Fin de getAllProducts

export function getProductById(req, res, next){

    //Obtenemos el ID de la peticiòn 
    const id = req.params.id

    //Buscamos el producto por IF
    Product.findById(id, (err,product)=>{
        if(err){
            res.status(500).json({err});
        }else{
            res.status(200).json({product});
        }
    })
}//Fin de getProductById

export function createProduct(req, res, next){
    //Obtenemos los parametros de la peticion req
    //Estos se encuentran en el objeto req.body
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const anio = req.body.anio;

    //Validamos que exista la informacion antes de guardarla
    if (!nombre) {
        //Enviamos un mensaje de tipo 422 para indicar que el campo es requerido
        res.status(422).json({err: 'Nombre requerido'})
        return;
    }
    if (!precio) {
        //Enviamos un mensaje de tipo 422 para indicar que el campo es requerido
        res.status(422).json({err: 'Precio requerido'})
        return;
    }if (!anio) {
        //Enviamos un mensaje de tipo 422 para indicar que el campo es requerido
        res.status(422).json({err: 'Año requerido'})
        return;
    }

    //Crear el objeto del producto para guardarlo en la bd
    const product = new Products({
        nombre,
        precio,
        anio
    });
    product.save((err, post)=>{
        if(err){
            res.status(500).json({err});
        }else{
            res.status(200).json({product});
        }
    })
}//Fin de createProduct

export function updateProduct(req, res, next){
    //Obtenemos el id para actualizar 
    const id = req.params.id;

    //Actualizamos el producto, buscandolo por id y enviandole
    //en el req.body los datos del producto a actualizar
    Product.findByIdAndUpdate(id, req.body, (err, product)=>{
        if(err)
            res.status(500).json({err})
        else
            res.status(200).json(product)
    });
}//Fin de updateProduct

export function deleteProduct(req, res, next){
    //Obtenemos el id para eliminar
    const id = req.params.id;

    //Eliminamos el producto por id y enviamos en el res
    //los datos del producto eliminado
    Product.findByIdAndRemove(id, { }, (err, product) =>{
        if(err)
            res.status(500).json({err})
        else
            res.status(200).json({product})
        });
}//Fin de deleteProduct