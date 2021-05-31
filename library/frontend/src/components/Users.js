import React from 'react'

const UserItem = ({item}) => {
    return (
        <div>
            <div className='u_tr'>
                <div className='ul_block'>
                    {item.id}
                </div>
                <div className='ul_block'>
                    {item.user_name}
                </div>
                <div className='ul_block'>
                    {item.first_name}
                </div>
                <div className='ul_block'>
                    {item.last_name}
                </div>
                <div className='ul_block'>
                    {item.email}
                </div>
                <div className='ul_block'>
                    {item.age}
                </div>
            </div>
        </div>
    )
}

const UserList = ({items}) => {
    return (
        <div className='table'>
            <div className='table_bar'>
                <div className='bar_block'>
                    ID
                </div>
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
            {items.map((item) => <UserItem item={item}/>)}
        </div>
    )
}


export default UserList
