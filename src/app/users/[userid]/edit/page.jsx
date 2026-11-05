import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserEditPage = async ({params}) => {
    
    const res = await params;
    const data = getUserById(res.userid);
    const userData = await data; 


    return (
        <div>
            <h2>Editing User: {userData.name} </h2>
        </div>
    );
};

export default UserEditPage;