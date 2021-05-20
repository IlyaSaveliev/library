import React from 'react'

const UserItem = ({user}) => {
    return (
        // <tr>
        //     <td>
        //         {user.user_name}
        //     </td>
        //     <td>
        //         {user.first_name}
        //     </td>
        //     <td>
        //         {user.last_name}
        //     </td>
        //     <td>
        //         {user.email}
        //     </td>
        //     <td>
        //         {user.age}
        //     </td>
        // </tr>
        <div>
            <div className='u_tr'>
                <div className='ul_block'>
                    {user.user_name}
                </div>
                <div className='ul_block'>
                    {user.first_name}
                </div>
                <div className='ul_block'>
                    {user.last_name}
                </div>
                <div className='ul_block'>
                    {user.email}
                </div>
                <div className='ul_block'>
                    {user.age}
                </div>
            </div>
        </div>
    )
}

const UserList = ({users}) => {
    return (
        //     <table>
        //     {/*<th>*/}
        // {/*    User name*/
        // }
        // {/*</th>*/
        // }
        // {/*<th>*/
        // }
        // {/*    First name*/
        // }
        // {/*</th>*/
        // }
        // {/*<th>*/
        // }
        // {/*    Last name*/
        // }
        // {/*</th>*/
        // }
        // {/*<th>*/
        // }
        // {/*    email*/
        // }
        // {/*</th>*/
        // }
        // {/*<th>*/
        // }
        // {/*    Age*/
        // }
        // {/*</th>*/
        // }
        // {/*</table>*/
        // }
        <div className='table'>
            <div className='table_bar'>
                <div className='bar_block'>
                    User name
                </div>
                <div className='bar_block'>
                    First name
                </div>
                <div className='bar_block'>
                    Last name
                </div>
                <div className='bar_block'>
                    Email
                </div>
                <div className='bar_block'>
                    Age
                </div>
            </div>
            {users.map((user) => <UserItem user={user}/>)}
        </div>
    )
}


export default UserList
