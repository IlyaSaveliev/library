import React from "react";

const ProjectItem = ({project}) => {
    return (
        <tr>
                <td>
                    {project.id}
                </td>
                <td>
                    {project.name}
                </td>
                <td>
                    {project.description}
                </td>
                <td>
                    {project.links}
                </td>
                <td>
                    {project.users.username}
                </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <table>
                <th>
                    ID
                </th>
                <th>
                   Name
                </th>
                <th>
                    Description
                </th>
                <th>
                    Links
                </th>
                {/*<th>*/}
                {/*    Members*/}
                {/*</th>*/}
            {projects.map((project) => <ProjectItem project={project}/>)}
        </table>
    )
}

export default ProjectList