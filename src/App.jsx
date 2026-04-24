import React from "react";
import TodoEditor from "./components/TodoEditor";
import todoDataJson from "./todo.json";
import TodoList from "./components/TodoList";

export default class App extends React.Component {
  state = {
    todos: todoDataJson,
    filter: '',
  }

  handleAdd = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    }
    this.setState((s) => ({
      ...s,
      todos: [...s.todos, newTodo]
    }))
  }

  handleDelete = (id) => {
    this.setState((s) => ({
      ...s,
      todos: s.todos.filter((todo) => todo.id !== id)
    }))
  }

  handleToggle = (id) => {
    this.setState((s) => ({
      ...s,
      todos: s.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }))
  }

  handleFilter = (e) => {
    this.setState({ filter: e.target.value })
  }

  getFilteredTodos = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.filter.toLowerCase())
    )
  }

  render() {
    const { filter, todos } = this.state
    const filteredTodos = this.getFilteredTodos()
    const completedCount = todos.filter((t) => t.completed).length

    return (
      <>
        <p>Всього завдань {todos.length}</p>
        <p>Виконано {completedCount}</p>

        <TodoEditor onAdd={this.handleAdd} />

        <input
          value={filter}
          onChange={this.handleFilter}
          placeholder="Фільтр по імені"
        />

        <TodoList
          todos={filteredTodos}
          onDelete={this.handleDelete}
          onToggle={this.handleToggle}
        />
      </>
    )
  }
}