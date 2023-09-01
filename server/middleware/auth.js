const jwt = require("jsonwebtoken")

const auth = async (req,res,next)=>{
    try {
        const token = req.header("Authorization").replace("bearer ","");
        const decoded = jwt.verify(token,"mysecret");
        
        const user = await User.findOne({
            _id:decoded._id,
            "tokens.token":token
        });

        if(!user) {
            throw new Error()
        }
        
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please Auth"})
    }
}

module.exports = auth;