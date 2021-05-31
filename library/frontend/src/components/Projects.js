import React from "react";

const ProjectItem = ({item}) => {
    return (
        <div>
            <div className='u_tr'>
                <div className='ul_block'>
                    {item.id}
                </div>
                <div className='ul_block'>
                    {item.name}
                </div>
                <div className='ul_block'>
                    {item.description}
                </div>
                <div className='ul_block'>
                    {item.links}
                </div>
                <div className='ul_block'>
                    {item.users.user_name}
                </div>
            </div>
        </div>
    )
}

const ProjectList = ({items}) => {
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
                    Links
                </div>
                <div className='bar_block'>
                    Members
                </div>
            </div>
            {items.map((item) => <ProjectItem item={item}/>)}
        </div>
    )
}

export default ProjectList