import createSessionService from "../services/sessions/createSession.service"

const createSessionController = async (request, response) => {

    try {
        const { email, password } = request.body
        const token = await createSessionService({ password, email })
        return response.status(200).json({token})
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

    
}

export { createSessionController }