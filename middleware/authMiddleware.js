const jwt = require('jsonwebtoken');
const roles = require('../config/roles');


const authenticate = (req, res, next) =>{
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    if(!token) res.status(401).json({message:'Unauthorized'});

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode);
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({message:'invalid token'})
    }
};

const authorize = (requiredRole) => (req, res, next) =>{

    const userRole = req.user.role;
    console.log(userRole);
    if(!requiredRole.includes(userRole));
    {
        return res.status(403).json({message:'forbidden'});

    }

    next();
}
module.exports = {authenticate, authorize};