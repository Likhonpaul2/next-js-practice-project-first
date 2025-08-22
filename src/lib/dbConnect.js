
import { MongoClient, ServerApiVersion } from "mongodb"

export const collectionNameObj = {
    authCollection: "auth",
    product_Collection: "products",
}


export default function dbConnect(collectionName) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME).collection(collectionName);
}


export  function dbConnectProduct(collectionName) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME_PRODUCTS).collection(collectionName);
}