import { async } from "@firebase/util";
import mongoose from "mongoose";
import { cache } from "react";

const dbUrl = process.env.DB_URL;
if (!dbUrl) {
    throw new Error(

    )
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        const: null,
        promise:null
    }
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands:false,
        }
        cached.promise = mongoose.connect(dbUrl, opts).then((mongoose)=> {
            return mongoose;
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}
export default dbConnect;