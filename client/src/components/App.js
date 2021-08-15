import React, { Component } from "react";
import {ToDoStore} from "../contexts/ToDoContext";
import Card from "./Card";
import InputToDo from "./InputToDo";

export class App extends Component {
  
  
  render() {
    return (
         <ToDoStore>
           <InputToDo/>
           <Card />
         </ToDoStore>
    );
  }
}

export default App;
