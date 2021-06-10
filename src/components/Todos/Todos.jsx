import React, { Component } from "react";
import TodoItem from "../TodoItem/Todoitem";

class Todos extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => this.setState({ todos: data }));
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createNewTodo = (e) => {
    const todos = [...this.state.todos];
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;

    todos.push({ id: id, title: this.state.todoTitle });

    this.setState({ todos });
    this.state.todoTitle = "";
  };

  deleteTodo = (id) => {
    const fetchTodo = [...this.state.todos];
    this.setState({ todos: fetchTodo.filter((todo) => todo.id !== id) });
  };
  updateTodo = (data) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex((todo) => todo.id === data.id);
    todos[index].title = data.title;
    this.setState(todos);
  };
  render = () => (
    <div>
      <h1>{this.props.title} </h1>
      <input
        style={{ marginLeft: "4rem" }}
        type="text"
        name="todoTitle"
        value={this.state.todoTitle}
        onChange={this.handleChange}
      />
      <button onClick={this.createNewTodo}>Save</button>
      <ul>
        {this.state.todos.map((todo) => (
          <TodoItem
            title={todo.title}
            key={todo.id}
            deleteTodo={this.deleteTodo}
            id={todo.id}
            updateTodo={this.updateTodo}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
}
export default Todos;
