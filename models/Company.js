import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location:String,
    industry:String,
    email: {
        type: String,
        required: true,
        
    },
    review:[
        {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Reviews",
        },
    ],
})

const companyModel = mongoose.model("Company", companySchema)

export default companyModel;