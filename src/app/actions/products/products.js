
"use server"

import { collectionNameObj, dbConnectProduct } from "@/lib/dbConnect";

export const products = async () => {
    
    const products_Collection = dbConnectProduct(collectionNameObj.product_Collection);
    const result = await products_Collection.find().toArray();

    
    return result;
}
