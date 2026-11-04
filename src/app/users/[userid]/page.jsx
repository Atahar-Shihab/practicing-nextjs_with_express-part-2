import { getUserById } from '@/lib/users';
import React from 'react';

const UserDetailPage = async ({params}) => {

    const { userid } = params;
    const user = await getUserById(userid);
    console.log('User data:', user); // Log the user data to the console for debugging

    return (
        <div>
            <h2>User Details</h2>
            
        </div>
    );
};

export default UserDetailPage;