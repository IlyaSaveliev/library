// noinspection JSUnresolvedVariable
import React from "react";

const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.id}
            </td>
            <td>
                {todo.project.name}
            </td>
            <td>
                {todo.description}
            </td>
            <td>
                {todo.created_ad}
            </td>
            <td>
                {todo.updated_ad}
            </td>
            <td>
                {todo.owner.username}
            </td>
            <td>
                {todo.status}
            </td>
        </tr>

    )
}

const TodoList = ({todos}) => {
    return (
        <table>
                <th>
                    ID
                </th>
                <th>
                    Project name
                </th>
                <th>
                    Description
                </th>
                <th>
                    Created
                </th>
                <th>
                    Updated
                </th>
                <th>
                    Owner
                </th>
                <th>
                    Status
                </th>
            {todos.map((todo) => <TodoItem todo={todo}/>)}
        </table>
    )
}

export default TodoList