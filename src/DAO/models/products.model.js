import { Schema,model } from "mongoose";

export const productsModel = model(
    'products',
    new Schema ({
        title: { type: String ,required:true },
        description: { type: String ,required:true},
        price: { type: Number ,required:true },
        thumbnail:{type: String ,required:true},
        status: {type: Boolean ,required:true},
        category:{ type: Number ,required:true },
        code: { type: Number ,required:true },
        stock: { type: Number ,required:true },
        id: { type: Number ,required:true }
    })
)