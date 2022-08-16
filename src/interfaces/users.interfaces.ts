interface IUserRequest {
    name: string
    email: string
    password?: string
    isAdm: boolean
}

interface IUserResponse extends IUserRequest {
    id: string
}

export { IUserRequest, IUserResponse }