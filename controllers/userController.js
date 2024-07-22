const User = require('../models/userModel.js')
exports.home = (req,res)=>{
    res.send('Hello world!');
}

exports.createuser = async(req,res)=>{
    try {
        const{name,email} = req.body
        const user = await User.create({
            name,
            email
        })
        res.status(201).json({
            success: true,
            message: "user created successfully", 
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            sucsess: false,
            message: error.message
        })
        
    }
}

exports.getusers = async (req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: "all the list of users",
            users
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

exports.deleteuser = async (req,res)=> {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        res.status(200).json({
            success: true,
            message: "user deleted successfuly"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });  
    }
};


exports.edituser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email } = req.body;
        const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};