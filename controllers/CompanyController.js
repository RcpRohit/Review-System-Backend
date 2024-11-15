import companyModel from "../models/Company.js";

export const createCompany = async(req,res)=>{
    // User

      try {
        const { name, location ,industry , email} = req.body;
    
        const companyobj = new companyModel({
          name,
          location,
          industry,
          email
        });
    
        const savedCompanyobj = await companyobj.save();
    
        res.json({
            
            savedCompanyobj,
          message: "Company Created Successfully"
        });
    
      } 
      catch (error) {
        res.json({
          error: "Error occured",
        });
        console.log(error)
      }
    }
    
    export const getCompanies=async(req,res)=>{
        try {
          const getcompanies=await companyModel.find()
          res.json({
            getcompanies
          })
        } catch (error) {
          res.json({
            error:"Cannot fetch data"
          })
          console.log(error)
        }
      }


   