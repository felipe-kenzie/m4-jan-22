import database from "../../database"

const retrieveUserService = async (userId) => {
    try {
        const res = await database.query(
            `SELECT
                id, name, email, isadm
            FROM
                users
            WHERE
                id = $1`,
            [userId]
        )

        if(res.rowCount === 0){
            throw new Error('User not found')
        }

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}

export default retrieveUserService