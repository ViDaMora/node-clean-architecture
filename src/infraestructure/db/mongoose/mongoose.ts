import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let db : string = process.env.mongoURI || 'mongodb://localhost/test';

export const connectDB =async ()=>{
    try{
        await mongoose
        .connect(db,{ useNewUrlParser: true,
                    useUnifiedTopology: true ,
                    useCreateIndex: true })
        console.log("Mongodb connected")
    }
    catch(err){
        console.error(err.message)
        process.exit(1)
    }
}