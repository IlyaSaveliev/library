import React from 'react';

const UserItem = ({user}) => {
    return (
            <tr>
                <td className='td'>
                    {user.id}
                </td>
                <td className='td'>
                    {user.username}
                </td>
                <td className='td'>
                    {user.firstname}
                </td>
                <td className='td'>
                    {user.lastname}
                </td>
                <td className='td'>
                    {user.email}
                </td>
            </tr>
    )
}

const UserList = ({users}) => {
    return (
            <table>
                <th className='th'>
                    Id
                </th>
                <th className='th'>
                    Username
                </th>
                <th className='th'>
                    Firstname
                </th>
                <th className='th'>
                    Lastname
                </th>
                <th className='th'>
                    Email
                </th>
                {users.map((user) => <UserItem user={user} />)}
            </table>
    )
}

export default UserList
