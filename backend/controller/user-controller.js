import User from "../model/user-schema.js"

export const signupUser = async (req, res) => {
    try {

        let user = await User.findOne({name: req.body.name});
        if (user) {
            return res.status(500).json("User already exists...");
        }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword,
        });
    
        return res.status(200).json(user);
    } catch(error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const loginUser = async (req, res) => {
    try {
        let user = await User.findOne({name: req.body.name, password: req.body.password});
        if (!user) {
            return res.status(500).json("User not found...");
        }

        return res.status(200).json({username: user.name});
    } catch(error) {
        console.log("error", error);
        return res.status(500).json({"error": error});
    }
}