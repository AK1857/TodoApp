import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    //console.log(todo);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item  ${todo.completed ? "completed" : " "}`}>
        {" "}
        {text}{" "}
      </li>
      <button onClick={completeHandler}>
        {" "}
        <i className="fas  fa-check  font-light"></i>
      </button>
      <button onClick={deleteHandler}>
        {" "}
        <i className="fas fa-trash  font-light"> </i>
      </button>
    </div>
  );
};

export default Todo;
