import React from "react";

const ProjectItem = ({project}) => {
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
        </tr>
    )
}

const ProjectList = ({projects}) => {
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
                {projects.map((project) => <ProjectItem project={project}/>)}
        </table>
    )
}

export default ProjectList