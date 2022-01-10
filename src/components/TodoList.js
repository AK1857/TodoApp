import React from "react";
import Todo from "./Todo"


const TodoList=( {todos, todo,setTodos,filterTodos})=>{

    return(
        <div class="todo-container">
      <ul class="todo-list">
        {
            filterTodos.map(todo=>(
                <Todo  
                text={todo.text}
                 key={todo.id}
                 todo={todo}
                  setTodos={setTodos}
                   todos={todos}  />
            ))
        }
      </ul>
    </div>
    );
}

export default TodoList;