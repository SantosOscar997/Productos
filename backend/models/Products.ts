import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    nombre:{
        type:String,
        default:'',
        required:true
    },
    precio:{
        type:Number,
        default:0.0,
        required:true
    },
    anio:{
        type:Number,
        default:2021,
        required:true
    },
});

export default mongoose.model('Products',ProductsSchema);