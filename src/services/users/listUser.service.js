import database from "../../database"

const listUserService = async () => {
    try {
        const res = await database.query(
            `SELECT id, name, email, isadm FROM users;`,
            []
        )
        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}

export default listUserService