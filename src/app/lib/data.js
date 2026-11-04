


export const getUsers = async () => {




    const res = await fetch('http://localhost:5000/users')

    if (!res.ok) {
        throw new Error('Failed to fetch users')
    }
    const data = await res.json()
    return data


}


export const getUserById = async (id) => {

    const res = await fetch(`http://localhost:5000/users/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch user')
    }
    const data = await res.json()
    return data
}