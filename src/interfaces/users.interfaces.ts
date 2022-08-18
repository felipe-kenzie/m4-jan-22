interface IUserRequest {
    name: string
    email: string
    password?: string
    isAdm: boolean
}

interface IUserResponse extends IUserRequest {
    id: string
}

interface IUserSessionRequest {
    email: string
    password: string
}

export { IUserRequest, IUserResponse, IUserSessionRequest }