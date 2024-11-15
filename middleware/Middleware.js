import UserModel from "../models/User.js"

// next = true asel tar next send karel controller la
// next is Function
export const isAdmin = async(req, res, next) => {
    try 
    {
            const { email } = req.body

            const userInfo = await UserModel.findOne({email})

            if(userInfo && userInfo.role == "Admin")
            {
                    next();
                    // proceed
            }
            else
            {
                    res.status(403).json({
                      message:"Access denied, Only Admin can add the Company"
                    })
            }


    } 
    catch (error) 
    {
        res.status(500).json({
            error:"Internal Server Error"
          })
    }
}
