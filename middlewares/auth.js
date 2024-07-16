import jwt from "jsonwebtoken";

const PAYMENT_TOKEN = "payment-token"

const isAuthenticated = async ( req, res, next ) =>{
    try {
        const token = req.cookies?.[PAYMENT_TOKEN];
        if(!token){
            return next(res.status(404).json({message: "Login First!! "}))
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedData._id;
        next();
    } catch (error) {
        console.log(error)
    }
}


export { isAuthenticated };