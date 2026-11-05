
import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailPage = async ({params}) => {
    const { userid } = await params;
        const user = await getUserById(userid);  

    console.log('User data:', user); // Log the user data to the console for debugging

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            <p className="text-lg ">Name: {user.name}</p>
            <p className="text-lg">Email: {user.email}</p>
        </div>
    );
};

export default UserDetailPage;