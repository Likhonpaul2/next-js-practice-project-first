"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const loginUser = async (payload)=>{
    const {email, password} = payload;

    const authCollection = dbConnect(collectionNameObj.authCollection);
    const user = await authCollection.findOne({email});
    const userPassword = await authCollection.findOne({password});
    
    if(!user) return null;
    if(!userPassword) return null;

    return user;
}