//https://jsonplaceholder.typicode.com/todos/1

import React from "react";
import axios from "axios";
const Context = React.createContext({});

const reducer = (prevState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        toDoList: prevState.toDoList.map((todo) => {
          if (todo._id === action.payload) {
            console.log("I am in");
            todo.complete = !todo.complete;
          }
          console.log(todo);
          return todo;
        }),
      };
    case "REMOVE":
      return {
        toDoList: prevState.toDoList.filter((todo) => {
          return todo._id !== action.payload;
        }),
      };
    case "ADD":
      return {
        toDoList: [...prevState.toDoList, action.payload],
      };
    default:
      return prevState;
  }
};

export class ToDoStore extends React.Component {
  state = {
    toDoList: [],
    dispatch: (action) =>
      this.setState((prevState) => {
        return reducer(prevState, action);
      }),
  };
  componentWillMount() {
    axios.get("/todos").then((res) => {
      this.setState({
        toDoList: res.data,
      });
    });
  }
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context.Consumer;
