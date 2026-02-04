import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const protect= async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //check if token exists in authorization header
            token=req.headers.authorization.split(' ')[1]

            //verify token
            const decoded= jwt.verify(token,process.env.JWT_SECRET)
            req.user= await User.findById(decoded.id).select('-password')
        
            if(!req.user){
                return res
                .status(401)
                .json({
                    success:false,
                    error:"User not found",
                    statusCode:401
                })
            }
            next()

        } catch (error) {
            
        }
    }

}
