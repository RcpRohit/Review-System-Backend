import express from "express";
import dotenv from "dotenv";
import dbconnect from "./config/database.js";
import User from "./models/User.js";
const app = express();

const PORT = 5050;
// middle ware
app.use(express.json());

dotenv.config();

dbconnect();

app.post("/api/v1/admin/create", async (req, res) => {

    try {
        const { name, email, password } = req.body;
        const user = new User
            ({
                name,
                email,
                password,
                role: "Admin"
            })
        const savedUser = await user.save();
        res.json
            ({
                savedUser
            })
    }
    catch (error) {
        res.json
            ({
                error: "Error Occured"
            })
    }
})

app.listen(PORT, () => {
    console.log(`Serve Is Running At Port ${PORT}`);
});

