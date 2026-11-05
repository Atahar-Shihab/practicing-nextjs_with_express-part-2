'use server';

import { revalidatePath } from "next/cache";


export const addUser = async (userData) => {


    const newUser = Object.fromEntries(userData.entries());


    const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });

    if (!res.ok) {
        throw new Error('Failed to add user');
    }
    const data = await res.json();
    revalidatePath('/users');
    return data;
};







export const deleteUser = async (userId) => {
    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        throw new Error('Failed to delete user');
    }

    const data = await res.json();
    revalidatePath('/users');

    return data;
};

