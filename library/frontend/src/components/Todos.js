// noinspection JSUnresolvedVariable

import React from "react";

const TodoItem = ({item}) => {
    return (
        <div className='u_tr'>
            <div className='ul_block'>
                {item.id}
            </div>
            <div className='ul_block'>
                {item.project.name}
            </div>
            <div className='ul_block'>
                {item.description}
            </div>
            <div className='ul_block'>
                {item.created_ad}
            </div>
            <div className='ul_block'>
                {item.updated_ad}
            </div>
            <div className='ul_block'>
                {item.owner.user_name}
            </div>
            <div className='ul_block'>
                {item.status}
            </div>
        </div>

    )
}

const TodoList = ({items}) => {
    return (
        <div className='table'>
            <div className='table_bar'>
                <div className='bar_block'>
                    ID
                </div>
                <div className='bar_block'>
                    Project name
                </div>
                <div className='bar_block'>
                    Description
                </div>
                <div className='bar_block'>
                    Created
                </div>
                <div className='bar_block'>
                    Updated
                </div>
                <div className='bar_block'>
                    Owner
                </div>
                <div className='bar_block'>
                    Status
                </div>
            </div>
            {items.map((item) => <TodoItem item={item}/>)}
        </div>
    )
}

export default TodoList