import { createAdmin,createAlumni,createStudent,getAllUsers} from "../controllers/UserController.js";
import { createCompany,getCompanies} from "../controllers/CompanyController.js";
import { createReview } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likecontroller.js";
import express from "express"
import { isAdmin } from "../middleware/Middleware.js";
const router = express.Router();// Post and Get May Call

router.post("/admin/create",createAdmin)//admin
router.post("/alumni/create",createAlumni)//alumni
router.post("/student/create",createStudent)// Student Create
router.get("/getAlluser/get",getAllUsers)// All User
router.post("/company/create",isAdmin,createCompany)// Create Company
router.get("/getAllcompany/get",getCompanies)// Get Company
router.post("/createreview/create",createReview);// Create Reviews
router.post("/like/create",likeReviews);// Like Reviews

export default router;