
import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';
import { addUser, deleteUser } from '../lib/actions';
import AddUserModal from '../components/AddUserModal';

const UsersPage = async () => {
    const users = await getUsers();
    console.log(users);
    return (
        <div>
            <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-bold flex items-center justify-center p-10">Total Users: {users.length}</h2>

            <AddUserModal addUserAction={addUser} />
            </div>
            <UsersTable users={users} deleteUserAction={deleteUser}  />
        </div>
    );
};

export default UsersPage;