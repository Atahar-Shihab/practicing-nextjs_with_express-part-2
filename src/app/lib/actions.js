export const deleteUser = async (userId) => {
    'use server';
    try {
        const res = await fetch(`http://localhost:5000/users/${userId}`, {
            method: 'DELETE',
        });
        if (!res.ok) {
            throw new Error('Failed to delete user');
        }
        return await res.json();
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};