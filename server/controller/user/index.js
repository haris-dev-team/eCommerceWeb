const bcrypt = require("bcrypt")
const User = require("../../model/users")
const jwt = require("jsonwebtoken")


const registerUser = async (req,res) => {
    try {
        const body = req.body

        const userRes = await User.create(body)

        res.status(201).json({
            status:true,
            message:"User Created Successfully",
            data:userRes
        })

    } catch (error) {
        res.status(500).json({
            status:false,
            message:"Internal Server Error",
            data:{}
        })
    }
}

const login = async (req,res) => {
    try {
        const body = req.body;

        const [user] = await User.aggregate([
          {  $match:{
                email:body.email
            }},
            {
                $project:{
                    firstName:1,
                    lastName:1,
                    email:1,
                    password:1,
                    role:1
                }
            }
        ])

        if(!user){
            return res.status(404).json({
                status:false,
                message:"User not Found"
            })
        }

        const isPasswordValid = await bcrypt.compare(body?.password,user?.password)
        if(!isPasswordValid){
            return res.status(401).json({
                status:false,
                message:"Invalid Credebtials!"
            })
        }

        const payload = {
            userId:user._id,
            role:user?.role,
            email:user?.email
        }

        const token  = jwt.sign(payload,process.env.JWT_SECRET)
        
        return res.status(200).json({
            status:true,
            message:"User Data Fetch SuccessFully",
            token,
            data:{
                firstName:user?.firstName,
                lastName:user?.lastName,
                email:user?.email,
                role:user?.role
            }
        })



    } catch (error) {
            return res.status(500).json({
                status:false,
                message:"Internal Server Error!",
                data:{}
            })
    }
}

module.exports = {
    registerUser,
    login
}