import jwt from "jsonwebtoken";

const userAuth = async (req, res, next)=>{
    const {token} = req.cookies;
   console.log(token)
    if(!token){
        return res.json({success: false, message: 'Not Authorized. Login Again'})
    }

    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        }else{
            return res.json({ success:false, message: 'Not Authorized. Login Again'});
        }

        next(); //try to execute controller function
        
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export default userAuth;