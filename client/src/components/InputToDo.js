import axios from "axios";
import React, { Component } from "react";
import Consumer from "../contexts/ToDoContext";
export default class InputToDo extends Component {
  state = {
    title: "",
    content: "",
  };
  update = (e) => {
    this.setState({
      title: e.target,
    });
  };
  render() {
    return (
      <Consumer>
        {(val) => {
          const { dispatch } = val;
          return (
            <div>
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (
                      this.state.title.length === 0 ||
                      this.state.content.length === 0
                    ) {
                      console.log("Error: There should be title and content");
                    } else {
                      const newToDo = this.state;
                      axios.post("/todos", newToDo).then((res) => {
                        return dispatch({
                          type: "ADD",
                          payload: res.data,
                        });
                      });
                      this.setState({
                        title: "",
                        content: "",
                      });
                    }
                  }}
                >
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter your title"
                      onChange={(e) => {
                        this.setState((prev) => {
                          return {
                            title: e.target.value,
                          };
                        });
                      }}
                      value={this.state.title}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Content</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Enter description"
                      onChange={(e) => {
                        this.setState((prev) => {
                          return {
                            content: e.target.value,
                          };
                        });
                      }}
                      value={this.state.content}
                    ></textarea>
                  </div>
                  <button type="submit">Add ToDo</button>
                </form>
              </div>
              <div class="one">
                <div class="px-3 pb-4">
                  <div>
                    <img
                      src="https://img.icons8.com/bubbles/50/000000/blond-short-hair-lady-with-blue-glasses.png"
                      width="15"
                      class="pic1"
                    />
                    <img
                      src="https://img.icons8.com/bubbles/50/000000/girl-with-chemical-test-tube.png"
                      width="22"
                      class="pic2"
                    />
                  </div>
                  <div>
                    <img
                      src="https://img.icons8.com/bubbles/100/000000/girl-with-glasses-art-palette.png"
                      width="65"
                    />
                  </div>
                  <div>
                    <img
                      src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-gem.png"
                      width="16"
                      class="pic3"
                    />
                    <img
                      src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png"
                      width="16"
                      class="pic4"
                    />
                  </div>
                  <div>
                    <h4 class="project">Add new</h4>
                  </div>
                  <div>
                    <p class="quote">
                      Still not enough? Click on a tile to add a new project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
