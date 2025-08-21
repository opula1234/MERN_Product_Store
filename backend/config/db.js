import mongoose from "mongoose";


export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("🛢️ Connected to Database ")
        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
        }
    catch(error){
    console.error(`⛔ Error: ${error.message}`);
    process.exit(1); //process code  1 code means with failure, 0 means sucess
    }
}