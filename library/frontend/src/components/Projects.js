import React from "react";

const ProjectItem = ({project, delete_project}) => {
    return (
        <tr>
                <td className='td'>
                    {project.id}
                </td>
                <td className='td'>
                    {project.name}
                </td>
                <td className='td'>
                    {project.description}
                </td>
                <td className='td'>
                    {project.links}
                </td>
                <td className='td'>
                    {project.users.username}
                </td>
                <td className='td'>
                    <button onClick={()=>delete_project(project.id)} type='button'>Delete</button>
                </td>
        </tr>
    )
}

const ProjectList = ({projects, delete_project}) => {
    return (
        <table>
                <th className='th'>
                    ID
                </th>
                <th className='th'>
                   Name
                </th>
                <th className='th'>
                    Description
                </th>
                <th className='th'>
                    Links
                </th>
                <th className='th'>
                    Members
                </th>
                <th></th>
                {projects.map((project) => <ProjectItem project={project} delete_project={delete_project}/>)}
        </table>
    )
}

export default ProjectList