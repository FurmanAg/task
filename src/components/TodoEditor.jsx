import React from "react";

export default class TodoEditor extends React.Component {
  state = {
    textValue: '',
  }

  handleChange = (e) => {
    this.setState({ textValue: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.textValue.trim() === '') {
      return
    }

    this.props.onAdd(this.state.textValue)
    this.setState({ textValue: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.textValue}
          onChange={this.handleChange}
          placeholder="Введи завадння!"
        />
        <button type="submit">створи</button>
      </form>
    )
  }
}