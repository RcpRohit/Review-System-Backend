
import reviewModel from '../models/review.js';
import Company from '../models/Company.js'
export const createReview = async (req, res) => {
    try {
        const { company, email, reviews } = req.body;
        // console.log(company, email, reviews);
        
        const companyinfo = await Company.findOne({ name: company });

        console.log(companyinfo);
        
        const reviewObj = new reviewModel({
            company: companyinfo._id,
            email,
            reviews,
        });


        const savedReviews = await reviewObj.save();

        const updatedCompany = await Company.findByIdAndUpdate(companyinfo.id, { $push: { reviews: savedReviews._id } }, { new: true }
        ).populate("review").exec();

        res.json({ company: updatedCompany });
    } 
    catch (error) 
    {
        res.status(500).json({ message: `Error while adding Review ${error}`  });
    }
};

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await reviewModel.find()
        res.json({
            reviews
        })
    }
    catch (error) {
        return res.status(400).json({
            error: "error while fetching post",
        })
    }
}