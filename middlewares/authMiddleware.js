const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

const authMiddleware = async (req, res, next) => {
    
    // Extract token from headers authorization
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    try{
        
        // Check whether the token is valid or not
        await jwt.verify(token, JWT_SECRET, (error, data) => {
            if(error){
                return res.status(401).json({
                    message: "Unauthorized"
                });
            }
            
            next();
        });
        
    }catch(error){
        
        return res.status(401).json({
            message: "Unauthorized"
        });
        
    }
}

module.exports = authMiddleware;