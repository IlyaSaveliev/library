// noinspection JSUnresolvedVariable
import React from "react";

const TodoItem = ({note}) => {
    return (
        <tr>
            <td className='td'>
                {note.id}
            </td>
            <td className='td'>
                {note.project}
            </td>
            <td className='td'>
                {note.description}
            </td>
            <td className='td'>
                {note.createdAd}
            </td>
            <td className='td'>
                {note.updatedAd}
            </td>
            <td className='td'>
                {note.owner}
            </td>
            <td className='td'>
                {note.status}
            </td>
        </tr>

    )
}

const TodoList = ({notes}) => {
    return (
        <table>
                <th className='th'>
                    ID
                </th>
                <th className='th'>
                    Project name
                </th>
                <th className='th'>
                    Description
                </th>
                <th className='th'>
                    Created
                </th>
                <th className='th'>
                    Updated
                </th>
                <th className='th'>
                    Owner
                </th>
                <th className='th'>
                    Status
                </th>
                {notes.map((note) => <TodoItem note={note}/>)}
        </table>
    )
}

export default TodoList