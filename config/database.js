import mongoose from "mongoose";
const dbconnect = async()=>{
    try
    {
            await mongoose.connect(process.env.MONGODB_URL);
            console.log("MongoDb Connected Successfully");
    }
    catch (error)
    {
        console.log("connection Failed",error);
    }
}
export default dbconnect;