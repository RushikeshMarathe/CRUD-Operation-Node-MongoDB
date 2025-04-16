
const User = require("../models/User");

exports.writeMethod = async(req,res) =>{

    try{

        const {name,email} = req.body;
        console.log("Name : "+ name);

        if(!name || !email) {
            return res.status(402).json({
                success:false,
                message:"Data is incomplete",
            });
        }
        
        const user = await User.create({
            name,
            email
        });

        return res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            user
        });


    }catch(error){
        console.error("error in registration");
        return res.status(401).json({
            success:false,
            message:"Error in Registration"
        })
    }

}