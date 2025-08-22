
"use server"

import { collectionNameObj, dbConnectProduct } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const productsDetails = async ({ id }) => {

    const products_Collection = dbConnectProduct(collectionNameObj.product_Collection);
    const objectId = new ObjectId(id);
    const result = await products_Collection.findOne({ _id: objectId });

    return result;
}
