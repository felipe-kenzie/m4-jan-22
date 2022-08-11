import jwt, { decode } from "jsonwebtoken"
import "dotenv/config"

const authenticationMiddleware = (request, response, next) => {

    let token = request.headers.authorization

    if(!token){
        return response.status(401).json({
            message: "Invalid token"
        })
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if(error){
            return response.status(401).json({
                message: "Invalid token"
            })
        }

        request.userId = decoded.sub
        request.userEmail = decoded.email
        request.isAdm = decoded.isAdm

        next()

    })

}

export default authenticationMiddleware