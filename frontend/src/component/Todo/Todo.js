import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../reducers/todoReducer";

const Todo = () => {
  const { todos } = useSelector((state) => state.todo);
  // console.log(todos,"<------todo.js");
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addTodo = () => {
    dispatch({ type: "CREATE_TODO", payload: { todo } });
  };

  useEffect(() => {
    dispatch({
      type: "GET_TODO",
    });
  }, []);

  const logOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col my-10 mx-5 h-screen">
        <div className="bg-black text-white text-xl px-4 py-2 w-full">
          TO-DO LIST
        </div>
        <div className=" bg-slate-400 flex py-4 items-center justify-center my-4">
          <div>
            <input
              className="px-4 py-1 lg:w-72 mr-2 rounded-xl"
              placeholder="Enter The Todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-black text-white px-3 py-1  font-medium mx-1 rounded-xl"
              onClick={() => addTodo()}
            >
              ADD TODO
            </button>
          </div>
        </div>
        <div>
          <ul>
            {todos.map((todoItem) => {
              return (
                <li
                  className="bg-black text-white mt-4 py-4 text-2xl"
                  key={todoItem.Id}
                  onDoubleClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: todoItem._id })
                  }
                >
                  {todoItem.todo}
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={() => logOut()}>
          <h5>Logout</h5>
        </button>
      </div>
    </div>
  );
};

export default Todo;
