
"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect"

export const registerUser = async (payload) => {
    const authCollection = dbConnect(collectionNameObj.authCollection);

    // validation 
    const { email, password } = payload;
    if (!email || !password) return null;


    const user = await authCollection.findOne({ email: payload.email });
    if (!user) {
        const result = await authCollection.insertOne(payload);
        result.insertedId = result.insertedId.toString();
        return result;
    }

    return null;

}