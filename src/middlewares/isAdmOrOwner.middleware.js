const isAdmOrOwnerMiddleware = (request, response, next) => {

    const isAdm = request.isAdm
    const id = request.params.id
    const loggedUser = request.userId

    if(isAdm === true){
        return next()
    }

    if(loggedUser === id){
        return next()
    }

    return response.status(401).json({
        message: 'You dont have authorization'
    })

}

export default isAdmOrOwnerMiddleware