import axios from "axios";
import React from "react";
import Consumer from "../contexts/ToDoContext";
export class Card extends React.Component {
  render() {
    return (
      <Consumer>
        {({ toDoList, dispatch }) => {
          return toDoList.map((todo) => {
            return (
              <div class="card">
                <div class="card-body">
                  <h5  class={todo.complete?"text-decoration-line-through":""}>{todo.title}</h5>
                  <p>{todo.content}</p>
                  <button
                    class="btn btn-danger"
                    onClick={() => {
                      axios.delete(`/todos/${todo._id}`);
                      return dispatch({
                        type: "REMOVE",
                        payload: todo._id,
                      });
                    }}
                  >
                    Remove
                  </button>
                  <button
                    class="btn btn-primary"
                    onClick={() => {
                      return dispatch({
                        type: "TOGGLE",
                        payload: todo._id,
                      });
                    }}
                  >
                    {todo.complete ? "Revert Back" : "Completed"}
                  </button>

                </div>
                <div class="main">
    {/* <div class="row">
        <div class="col-md-4">
           
            <div class="pt-2">
                <div class="two">
                    <div class="d-flex justify-content-end px-3 pt-1"><i class="mdi mdi-star-outline pr-1 star"></i><i class="mdi mdi-dots-horizontal dot"></i></div>
                    <div class="px-3">
                        <div class="round"><img src="https://img.icons8.com/emoji/48/000000/hedgehog-emoji.png" width="23" class="imgfix" /></div>
                    </div>
                    <div class="px-3 pt-3">
                        <h3 class="name">Hedgehogs</h3>
                        <p class="quote2">These cuties will need a new place where thay can live with their owner.</p>
                    </div>
                    <div class="d-flex justify-content-start px-3 align-items-center"> <i class="mdi mdi-view-comfy task"></i> <span class="quote2 pl-2">Task: Commercial project</span> </div>
                    <div class="d-flex justify-content-between px-3 align-items-center pb-3">
                        <div class="d-flex justify-content-start align-items-center"> <i class="mdi mdi-calendar-clock date"></i> <span class="quote2 pl-2">Date: 01.10.2020</span> </div>
                        <div class="d-flex justify-content-end"> <img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-musical-notes.png" width="20" class="img1" /> <img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="20" class="img2" /> <img src="https://img.icons8.com/bubbles/50/000000/short-hair-girl-question-mark.png" width="20" class="img3" /> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="">
                <div class="two">
                    <div class="d-flex justify-content-end px-3 pt-1"><i class="mdi mdi-star-outline pr-1 star"></i><i class="mdi mdi-dots-horizontal dot"></i></div>
                    <div class="px-3">
                        <div class="round"><img src="https://img.icons8.com/bubbles/100/000000/girl-with-glasses-art-palette.png" width="23" /></div>
                    </div>
                    <div class="px-3 pt-3">
                        <h3 class="name">Friendly Painter</h3>
                        <p class="quote2">Within the exercise, we design aroom in a scandinavian style.</p>
                    </div>
                    <div class="d-flex justify-content-start px-3 align-items-center"> <i class="mdi mdi-view-comfy task"></i> <span class="quote2 pl-2">Task: Practice</span> </div>
                    <div class="d-flex justify-content-between px-3 align-items-center pb-3">
                        <div class="d-flex justify-content-start align-items-center"> <i class="mdi mdi-calendar-clock date"></i> <span class="quote2 pl-2">Date: 01.07.2020</span> </div>
                        <div class="d-flex justify-content-end"> <img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-musical-notes.png" width="20" class="img1" /> <img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="20" class="img2" /> <img src="https://img.icons8.com/bubbles/50/000000/short-hair-girl-question-mark.png" width="20" class="img3" /> </div>
                    </div>
                </div>
            </div>
            <div class="pt-2">
                <div class="two">
                    <div class="d-flex justify-content-end px-3 pt-1"><i class="mdi mdi-star-outline pr-1 star"></i><i class="mdi mdi-dots-horizontal dot"></i></div>
                    <div class="px-3">
                        <div class="round"><img src="https://img.icons8.com/cute-clipart/64/000000/doctor-male.png" width="23" class="imgfix" /></div>
                    </div>
                    <div class="px-3 pt-3">
                        <h3 class="name">Dr. Stefan</h3>
                        <p class="quote2">Mr. Doctor needs a new office, let's do something nice!</p>
                    </div>
                    <div class="d-flex justify-content-start px-3 align-items-center"> <i class="mdi mdi-view-comfy task"></i> <span class="quote2 pl-2">Task: Commercial project</span> </div>
                    <div class="d-flex justify-content-between px-3 align-items-center pb-3">
                        <div class="d-flex justify-content-start align-items-center"> <i class="mdi mdi-calendar-clock date"></i> <span class="quote2 pl-2">Date: 01.12.2020</span> </div>
                        <div class="d-flex justify-content-end"> <img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-musical-notes.png" width="20" class="img1" /> <img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="20" class="img2" /> <img src="https://img.icons8.com/bubbles/50/000000/short-hair-girl-question-mark.png" width="20" class="img3" /> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="">
                <div class="two">
                    <div class="d-flex justify-content-end px-3 pt-1"><i class="mdi mdi-star-outline pr-1 star"></i><i class="mdi mdi-dots-horizontal dot"></i></div>
                    <div class="px-3">
                        <div class="round"><img src="https://img.icons8.com/cotton/64/000000/football-ball.png" width="23" class="imgfix" /></div>
                    </div>
                    <div class="px-3 pt-3">
                        <h3 class="name">Dressing Room</h3>
                        <p class="quote2">Wonderful news! Let's arrange the hosts and guest's dressing rooms!</p>
                    </div>
                    <div class="d-flex justify-content-start px-3 align-items-center"> <i class="mdi mdi-view-comfy task"></i> <span class="quote2 pl-2">Task: Commercial project</span> </div>
                    <div class="d-flex justify-content-between px-3 align-items-center pb-3">
                        <div class="d-flex justify-content-start align-items-center"> <i class="mdi mdi-calendar-clock date"></i> <span class="quote2 pl-2">Date: 01.08.2020</span> </div>
                        <div class="d-flex justify-content-end"> <img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-musical-notes.png" width="20" class="img1" /> <img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="20" class="img2" /> <img src="https://img.icons8.com/bubbles/50/000000/short-hair-girl-question-mark.png" width="20" class="img3" /> </div>
                    </div>
                </div>
            </div>
            <div class="pt-2">
                <div class="two">
                    <div class="d-flex justify-content-end px-3 pt-1"><i class="mdi mdi-star-outline pr-1 star"></i><i class="mdi mdi-dots-horizontal dot"></i></div>
                    <div class="px-3">
                        <div class="round"><img src="https://img.icons8.com/plasticine/100/000000/santas-hat.png" width="23" class="imgfix" /></div>
                    </div>
                    <div class="px-3 pt-3">
                        <h3 class="name">Ho, Ho, Ho!</h3>
                        <p class="quote2">Christmas is coming! will we try to prepare something for this occasion?</p>
                    </div>
                    <div class="d-flex justify-content-start px-3 align-items-center"> <i class="mdi mdi-view-comfy task"></i> <span class="quote2 pl-2">Task: Practice</span> </div>
                    <div class="d-flex justify-content-between px-3 align-items-center pb-3">
                        <div class="d-flex justify-content-start align-items-center"> <i class="mdi mdi-calendar-clock date"></i> <span class="quote2 pl-2">Date: 20.12.2020</span> </div>
                        <div class="d-flex justify-content-end"> <img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-musical-notes.png" width="20" class="img1" /> <img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="20" class="img2" /> <img src="https://img.icons8.com/bubbles/50/000000/short-hair-girl-question-mark.png" width="20" class="img3" /> </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
</div>
              </div>
            );
          });
        }}
      </Consumer>
    );
  }
}

export default Card;
