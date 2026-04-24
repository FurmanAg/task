import React from "react";

export default class TodoList extends React.Component {
  render() {
    const { todos, onDelete, onToggle } = this.props

    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    )
  }
}